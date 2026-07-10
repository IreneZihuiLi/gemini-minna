
import React, { useState, useEffect, useMemo } from 'react';
import { VocabularyItem } from '../types';
import { fetchVocabularyForLesson } from '../services/lessonService';
import { deleteCustomWord } from '../services/storage';
import { VocabCard } from './VocabCard';
import { GrammarCard } from './GrammarCard';
import { STATIC_GRAMMAR } from '../data/staticGrammar';
import { STATIC_LESSONS } from '../data/staticLessons';
import { STATIC_LESSON_CONTENT } from '../data/staticLessonContent';

interface LessonViewProps {
  lessonId: number;
  onBack: () => void;
}

type LessonSection = 'grammar' | 'vocabulary' | 'examples' | 'text' | null;

const SentenceAudioButton = ({ active, onClick }: { active: boolean; onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${active ? 'bg-slate-200 border-slate-300 text-slate-700' : 'bg-white border-slate-200 text-slate-400 hover:bg-slate-50 hover:text-slate-600'}`}
    aria-label="播放读音"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
    </svg>
  </button>
);

export const LessonView: React.FC<LessonViewProps> = ({ lessonId, onBack }) => {
  const [words, setWords] = useState<VocabularyItem[]>([]);
  const [activeSection, setActiveSection] = useState<LessonSection>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [activeReadingId, setActiveReadingId] = useState<string | null>(null);

  const grammarPoints = STATIC_GRAMMAR[lessonId] || [];
  const lessonContent = STATIC_LESSON_CONTENT[lessonId] || { examples: [], texts: [] };
  const staticWordCount = STATIC_LESSONS[lessonId]?.length || 0;

  useEffect(() => {
    setActiveSection(null);
    setWords([]);
    setLoading(false);
    setError(null);
  }, [lessonId]);

  useEffect(() => {
    if (activeSection !== 'vocabulary') return;

    let mounted = true;
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchVocabularyForLesson(lessonId);
        if (mounted) setWords(data);
      } catch (err) {
        if (mounted) setError("Failed to load lesson content. Please try again.");
      } finally {
        if (mounted) setLoading(false);
      }
    };
    loadData();
    return () => { mounted = false; };
  }, [activeSection, lessonId]);

  const handleHeaderBack = () => {
    window.speechSynthesis.cancel();
    setActiveReadingId(null);
    if (activeSection) {
      setActiveSection(null);
      setError(null);
      return;
    }
    onBack();
  };

  const playSentenceAudio = (text: string, id: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.85;
    const voices = window.speechSynthesis.getVoices();
    const jaVoice = voices.find(v => v.lang === 'ja-JP' && !v.name.includes('Compact')) ||
                    voices.find(v => v.lang.includes('ja'));
    if (jaVoice) utterance.voice = jaVoice;
    setActiveReadingId(id);
    utterance.onend = () => setActiveReadingId(null);
    utterance.onerror = () => setActiveReadingId(null);
    window.speechSynthesis.speak(utterance);
  };

  const handleDeleteWord = (id: string) => {
    if (confirm("Are you sure you want to remove this custom word?")) {
      deleteCustomWord(lessonId, id);
      setWords(prev => prev.filter(w => w.id !== id));
    }
  };

  // Group words by category
  const groupedWords = useMemo(() => {
    const groups: Record<string, VocabularyItem[]> = {};
    const orderedCategories = ["Nouns", "Verbs", "Adjectives", "Adverbs", "Expressions", "Others"];
    
    const sortedWords = [...words].sort((a, b) => {
      const idxA = orderedCategories.indexOf(a.category);
      const idxB = orderedCategories.indexOf(b.category);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      return a.category.localeCompare(b.category);
    });

    sortedWords.forEach(word => {
      const cat = word.category || "Others";
      if (!groups[cat]) {
        groups[cat] = [];
      }
      groups[cat].push(word);
    });
    
    return groups;
  }, [words]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <button 
            onClick={handleHeaderBack}
            className="p-2 -ml-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
          </button>
          <h2 className="text-xl font-bold text-slate-800">
            Lesson {lessonId}
            <span className="text-slate-400 font-normal ml-2 text-base">
              {activeSection === 'grammar' ? 'Grammar' : activeSection === 'vocabulary' ? 'Vocabulary' : activeSection === 'examples' ? 'Examples' : activeSection === 'text' ? 'Text' : 'Study Mode'}
            </span>
          </h2>
        </div>
        <div className="flex items-center gap-4">
          {activeSection === 'vocabulary' && (
            <div className="text-sm font-medium text-slate-500 hidden sm:block">
              {loading ? 'Loading...' : `${words.length} words`}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">
        {!activeSection ? (
          <div className="min-h-[60vh] flex flex-col justify-center">
            <div className="mb-8">
              <p className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-3">Choose Study Mode</p>
              <h3 className="text-3xl font-black text-slate-800 tracking-tight">Lesson {lessonId} 学什么？</h3>
              <p className="text-slate-500 mt-3 max-w-2xl">先选语法或词汇。语法是知识卡片，词汇是背词卡片和动词变形。</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              <button
                type="button"
                onClick={() => setActiveSection('grammar')}
                disabled={grammarPoints.length === 0}
                className={`group text-left bg-white rounded-2xl border p-6 shadow-sm transition-all min-h-[260px] ${grammarPoints.length > 0 ? 'border-indigo-100 hover:border-indigo-300 hover:shadow-lg hover:-translate-y-1' : 'border-slate-200 opacity-60 cursor-not-allowed'}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5V5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1 0-4h12"/>
                      <path d="M8 7h6"/>
                      <path d="M8 11h7"/>
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-indigo-500 bg-indigo-50 px-2.5 py-1 rounded-full">{grammarPoints.length} cards</span>
                </div>
                <h4 className="mt-8 text-2xl font-black text-slate-800">语法</h4>
                <p className="mt-3 text-slate-500 leading-relaxed">结构公式、中文解释、使用场景、例句和小提示。适合先建立本课框架。</p>
                <div className="mt-8 flex items-center text-indigo-600 font-bold">
                  <span>{grammarPoints.length > 0 ? 'Open Grammar' : 'Coming Soon'}</span>
                  {grammarPoints.length > 0 && (
                    <svg className="ml-2 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  )}
                </div>
              </button>

              <button
                type="button"
                onClick={() => setActiveSection('vocabulary')}
                className="group text-left bg-white rounded-2xl border border-emerald-100 p-6 shadow-sm transition-all min-h-[260px] hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="5" width="16" height="14" rx="2"/>
                      <path d="M8 9h8"/>
                      <path d="M8 13h5"/>
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                    {staticWordCount > 0 ? `${staticWordCount} words` : 'Coming Soon'}
                  </span>
                </div>
                <h4 className="mt-8 text-2xl font-black text-slate-800">词汇</h4>
                <p className="mt-3 text-slate-500 leading-relaxed">词汇、罗马音、发音、例句收藏。动词会显示分类和多种变形。</p>
                <div className="mt-8 flex items-center text-emerald-600 font-bold">
                  <span>Open Vocabulary</span>
                  <svg className="ml-2 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setActiveSection('examples')}
                disabled={lessonContent.examples.length === 0}
                className={`group text-left bg-white rounded-2xl border p-6 shadow-sm transition-all min-h-[260px] ${lessonContent.examples.length > 0 ? 'border-sky-100 hover:border-sky-300 hover:shadow-lg hover:-translate-y-1' : 'border-slate-200 opacity-60 cursor-not-allowed'}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 6h13"/>
                      <path d="M8 12h13"/>
                      <path d="M8 18h13"/>
                      <path d="M3 6h.01"/>
                      <path d="M3 12h.01"/>
                      <path d="M3 18h.01"/>
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full">{lessonContent.examples.length} items</span>
                </div>
                <h4 className="mt-8 text-2xl font-black text-slate-800">例句</h4>
                <p className="mt-3 text-slate-500 leading-relaxed">本课文型和例文，中日对照展示，适合跟读和回顾语法用法。</p>
                <div className="mt-8 flex items-center text-sky-600 font-bold">
                  <span>{lessonContent.examples.length > 0 ? 'Open Examples' : 'Coming Soon'}</span>
                  {lessonContent.examples.length > 0 && (
                    <svg className="ml-2 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  )}
                </div>
              </button>

              <button
                type="button"
                onClick={() => setActiveSection('text')}
                disabled={lessonContent.texts.length === 0}
                className={`group text-left bg-white rounded-2xl border p-6 shadow-sm transition-all min-h-[260px] ${lessonContent.texts.length > 0 ? 'border-rose-100 hover:border-rose-300 hover:shadow-lg hover:-translate-y-1' : 'border-slate-200 opacity-60 cursor-not-allowed'}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full">{lessonContent.texts.length} text</span>
                </div>
                <h4 className="mt-8 text-2xl font-black text-slate-800">课文</h4>
                <p className="mt-3 text-slate-500 leading-relaxed">会话按角色分行显示，保留日语原文和中文意思。</p>
                <div className="mt-8 flex items-center text-rose-600 font-bold">
                  <span>{lessonContent.texts.length > 0 ? 'Open Text' : 'Coming Soon'}</span>
                  {lessonContent.texts.length > 0 && (
                    <svg className="ml-2 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  )}
                </div>
              </button>
            </div>
          </div>
        ) : activeSection === 'vocabulary' && loading ? (
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <div className="w-16 h-16 border-4 border-slate-100 border-t-indigo-600 rounded-full animate-spin mb-6"></div>
            <p className="text-lg text-slate-600 font-medium">Opening Lesson {lessonId}...</p>
            <p className="text-sm text-slate-400 mt-2">Loading local lesson data</p>
          </div>
        ) : activeSection === 'vocabulary' && error ? (
          <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
            <div className="text-red-500 mb-4 bg-red-50 p-4 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Oops! Something went wrong.</h3>
            <p className="text-slate-500 max-w-md mb-6">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : activeSection === 'grammar' ? (
          <div className="space-y-8">
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-700">Grammar Notes</h3>
                  <p className="text-sm text-slate-400 font-medium mt-1">知识卡片：结构、用法和例句</p>
                </div>
                <div className="h-px bg-slate-200 flex-1"></div>
                <span className="text-sm text-indigo-500 font-bold bg-indigo-50 px-2 py-1 rounded-md">{grammarPoints.length} cards</span>
              </div>

              {grammarPoints.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {grammarPoints.map((point, index) => (
                    <GrammarCard key={point.id} point={point} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-3xl border border-slate-100">
                  <p className="text-slate-400 text-lg">No grammar cards for this lesson yet.</p>
                </div>
              )}
            </section>
          </div>
        ) : activeSection === 'examples' ? (
          <div className="space-y-8">
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-700">Examples</h3>
                  <p className="text-sm text-slate-400 font-medium mt-1">文型・例文：中日对照</p>
                </div>
                <div className="h-px bg-slate-200 flex-1"></div>
                <span className="text-sm text-sky-600 font-bold bg-sky-50 px-2 py-1 rounded-md">{lessonContent.examples.length} items</span>
              </div>

              {lessonContent.examples.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  {lessonContent.examples.map((example) => (
                    <article key={example.id} className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${example.kind === 'pattern' ? 'bg-indigo-50 text-indigo-600' : 'bg-sky-50 text-sky-600'}`}>
                          {example.kind === 'pattern' ? '文型' : '例文'}
                        </span>
                        <span className="text-sm font-bold text-slate-400">{example.title}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <SentenceAudioButton
                          active={activeReadingId === example.id}
                          onClick={() => playSentenceAudio(example.ja, example.id)}
                        />
                        <div className="min-w-0">
                          <p className="text-lg font-bold text-slate-800 leading-relaxed select-text">{example.ja}</p>
                          <p className="text-sm text-slate-500 mt-3 leading-relaxed">{example.zh}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-3xl border border-slate-100">
                  <p className="text-slate-400 text-lg">No examples for this lesson yet.</p>
                </div>
              )}
            </section>
          </div>
        ) : activeSection === 'text' ? (
          <div className="space-y-8">
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-700">Text</h3>
                  <p className="text-sm text-slate-400 font-medium mt-1">课文・会话：角色分行阅读</p>
                </div>
                <div className="h-px bg-slate-200 flex-1"></div>
                <span className="text-sm text-rose-600 font-bold bg-rose-50 px-2 py-1 rounded-md">{lessonContent.texts.length} text</span>
              </div>

              {lessonContent.texts.length > 0 ? (
                <div className="space-y-6">
                  {lessonContent.texts.map((text) => (
                    <article key={text.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                      <div className="bg-slate-50 border-b border-slate-100 p-5">
                        {text.subtitle && <p className="text-xs font-bold text-rose-500 uppercase tracking-widest mb-2">{text.subtitle}</p>}
                        <h4 className="text-2xl font-black text-slate-800">{text.title}</h4>
                      </div>
                      <div className="p-5 space-y-4">
                        {text.lines.map((line, index) => (
                          <div key={`${text.id}-line-${index}`} className="grid grid-cols-1 md:grid-cols-[9rem_1fr] gap-2 md:gap-4 rounded-xl bg-slate-50 border border-slate-100 p-4">
                            <div className="text-sm font-bold text-rose-600">{line.speaker}</div>
                            <div className="flex items-start gap-3">
                              <SentenceAudioButton
                                active={activeReadingId === `${text.id}-line-${index}`}
                                onClick={() => playSentenceAudio(line.ja, `${text.id}-line-${index}`)}
                              />
                              <div className="min-w-0">
                                <p className="text-base font-semibold text-slate-800 leading-relaxed select-text">{line.ja}</p>
                                <p className="text-sm text-slate-500 mt-1 leading-relaxed">{line.zh}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-3xl border border-slate-100">
                  <p className="text-slate-400 text-lg">No text for this lesson yet.</p>
                </div>
              )}
            </section>
          </div>
        ) : (
          <div className="space-y-12">
            {Object.entries(groupedWords).map(([category, items]: [string, VocabularyItem[]]) => (
              <section key={category}>
                 <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-2xl font-bold text-slate-700">{category}</h3>
                    <div className="h-px bg-slate-200 flex-1"></div>
                    <span className="text-sm text-slate-400 font-medium bg-slate-100 px-2 py-1 rounded-md">{items.length} words</span>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {items.map((item) => (
                      <VocabCard 
                        key={item.id} 
                        item={item} 
                        onDelete={item.isCustom ? handleDeleteWord : undefined}
                      />
                    ))}
                 </div>
              </section>
            ))}
            
            {words.length === 0 && (
               <div className="text-center py-20 bg-white rounded-3xl border border-slate-100">
                  <p className="text-slate-400 text-lg">No vocabulary items found for this lesson yet.</p>
               </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
