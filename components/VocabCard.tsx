
import React, { useState, useEffect, useRef } from 'react';
import { VocabularyItem, CollectedSentence } from '../types';
import { generateSpeech } from '../services/geminiService';
import { toggleCollectSentence, isSentenceCollected } from '../services/storage';

interface VocabCardProps {
  item: VocabularyItem;
  onDelete?: (id: string) => void;
}

// Icons
const VolumeIcon = ({ active }: { active?: boolean }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={active ? "text-slate-600 animate-pulse" : "text-slate-400"}
  >
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
  </svg>
);

const SparklesIcon = ({ active, error }: { active?: boolean; error?: boolean }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={error ? "text-red-500" : active ? "text-indigo-600 animate-pulse" : "text-indigo-500"}
  >
    {error ? (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </>
    ) : (
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    )}
  </svg>
);

const BookmarkIcon = ({ active }: { active: boolean }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill={active ? "currentColor" : "none"} 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={active ? "text-yellow-500" : "text-slate-300 hover:text-yellow-400"}
  >
    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
  </svg>
);

const SpinnerIcon = () => (
  <svg className="animate-spin h-4 w-4 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

const getInferredGrammarType = (item: VocabularyItem) => {
  if (item.grammarType) return item.grammarType;
  if (item.category === 'Verbs') {
    const k = item.kanji;
    const r = item.romaji;
    if (k.endsWith('します') || k === '来ます' || r.endsWith('shimasu') || r === 'kimasu') return 'Group III';
    const group2Exceptions = ['起きます', '見ます', 'います', '借ります', '降ります', '浴びます', 'できます', '足ります', '着ます']; 
    if (group2Exceptions.some(ex => k.endsWith(ex))) return 'Group II';
    if (r.endsWith('emasu')) return 'Group II';
    return 'Group I';
  }
  if (item.category === 'Adjectives') {
    if (item.kana.includes('（な）') || item.kana.includes('(na)')) return 'na-adj';
    if (item.kana.endsWith('い')) return 'i-adj';
  }
  return null;
};

const GrammarBadge = ({ type }: { type: string }) => {
  const label = type === 'Irregular' ? 'Group III' : type;
  let colorClass = 'bg-slate-100 text-slate-500';
  switch (label) {
    case 'Group I': colorClass = 'bg-blue-100 text-blue-700'; break;
    case 'Group II': colorClass = 'bg-green-100 text-green-700'; break;
    case 'Group III': colorClass = 'bg-orange-100 text-orange-700'; break;
    case 'i-adj': colorClass = 'bg-pink-100 text-pink-700'; break;
    case 'na-adj': colorClass = 'bg-purple-100 text-purple-700'; break;
  }
  return (
    <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${colorClass}`}>
      {label}
    </span>
  );
};

const getVerbForms = (item: VocabularyItem) => {
  if (!item.conjugations) return [];
  return [
    { label: '辞書形', hint: 'Dictionary', value: item.conjugations.dictionary, accent: true },
    { label: 'ます形', hint: 'Masu-form', value: item.conjugations.masu },
    { label: 'て形', hint: 'Te-form', value: item.conjugations.te, accent: true },
    { label: 'ない形', hint: 'Nai-form', value: item.conjugations.nai },
    { label: 'た形', hint: 'Ta-form', value: item.conjugations.ta },
  ].filter(form => Boolean(form.value));
};

export const VocabCard: React.FC<VocabCardProps> = ({ item, onDelete }) => {
  const [activeAudioId, setActiveAudioId] = useState<string | null>(null);
  const [loadingAudioId, setLoadingAudioId] = useState<string | null>(null);
  const [errorAudioId, setErrorAudioId] = useState<string | null>(null);
  const audioCache = useRef<Map<string, string>>(new Map());
  const synth = useRef(window.speechSynthesis);
  const grammarType = getInferredGrammarType(item);
  const verbForms = getVerbForms(item);

  const [collectedMap, setCollectedMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const initialMap: Record<string, boolean> = {};
    item.sentences.forEach(s => {
      initialMap[s.ja] = isSentenceCollected(s.ja);
    });
    setCollectedMap(initialMap);
  }, [item.sentences]);

  const handleToggleCollect = (sent: { ja: string, zh: string }) => {
    const collected: CollectedSentence = {
      id: `COL-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      ja: sent.ja,
      zh: sent.zh,
      sourceKanji: item.kanji,
      sourceMeaning: item.meaning
    };
    const isNowCollected = toggleCollectSentence(collected);
    setCollectedMap(prev => ({ ...prev, [sent.ja]: isNowCollected }));
  };

  const playNativeAudio = (text: string, id: string) => {
    if (!synth.current) return;
    synth.current.cancel();
    setErrorAudioId(null);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.85; 
    const voices = synth.current.getVoices();
    const jaVoice = voices.find(v => v.lang === 'ja-JP' && !v.name.includes('Compact')) || 
                    voices.find(v => v.lang.includes('ja'));
    if (jaVoice) utterance.voice = jaVoice;
    setActiveAudioId(id);
    utterance.onend = () => setActiveAudioId(null);
    utterance.onerror = () => setActiveAudioId(null);
    synth.current.speak(utterance);
  };

  const playAiAudio = async (text: string, id: string) => {
    synth.current.cancel();
    setErrorAudioId(null);
    if (audioCache.current.has(text)) {
      playBlobAudio(audioCache.current.get(text)!, id);
      return;
    }
    setLoadingAudioId(id);
    try {
      const audioUrl = await generateSpeech(text);
      audioCache.current.set(text, audioUrl);
      playBlobAudio(audioUrl, id);
    } catch (e) {
      setErrorAudioId(id);
      setTimeout(() => setErrorAudioId(null), 3000);
    } finally {
      setLoadingAudioId(null);
    }
  };

  const playBlobAudio = (url: string, id: string) => {
    const audio = new Audio(url);
    setActiveAudioId(id);
    audio.onended = () => setActiveAudioId(null);
    audio.onerror = () => setActiveAudioId(null);
    audio.play();
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow h-full relative group/card">
      <div className="bg-slate-50 p-4 border-b border-slate-100 flex justify-between items-start">
        <div className="flex-1 pr-2">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
             {grammarType && <GrammarBadge type={grammarType} />}
             {item.isCustom && <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Custom</span>}
          </div>
          <div className="flex items-baseline gap-2 flex-wrap">
            <h2 className="text-2xl font-bold text-slate-800 leading-tight">{item.kanji}</h2>
            <p className="text-indigo-600 text-lg font-medium">{item.kana}</p>
          </div>
          <p className="text-slate-400 text-xs font-mono mb-2">{item.romaji}</p>
          <div>
            <p className="text-slate-700 font-bold">{item.meaning}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button 
            onClick={() => playNativeAudio(item.kanji, 'main-native')}
            className={`p-2 rounded-full transition-colors flex-shrink-0 border ${activeAudioId === 'main-native' ? 'bg-slate-200 border-slate-300' : 'bg-white border-slate-200 hover:bg-slate-50'}`}
          >
            <VolumeIcon active={activeAudioId === 'main-native'} />
          </button>
           <button 
            onClick={() => playAiAudio(item.kanji, 'main-ai')}
            disabled={loadingAudioId === 'main-ai'}
            className={`p-2 rounded-full transition-colors flex-shrink-0 border ${errorAudioId === 'main-ai' ? 'bg-red-50 border-red-200' : activeAudioId === 'main-ai' ? 'bg-indigo-100 border-indigo-200' : 'bg-white border-slate-200 hover:bg-indigo-50 hover:border-indigo-200'}`}
          >
            {loadingAudioId === 'main-ai' ? <SpinnerIcon /> : <SparklesIcon active={activeAudioId === 'main-ai'} error={errorAudioId === 'main-ai'} />}
          </button>
        </div>
      </div>

      {item.isCustom && onDelete && (
        <button 
          onClick={() => onDelete(item.id)}
          className="absolute top-2 left-2 p-1.5 bg-white/80 rounded-lg text-slate-300 hover:text-red-500 opacity-0 group-hover/card:opacity-100 transition-opacity shadow-sm border border-slate-100"
          title="Delete Custom Word"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
        </button>
      )}

      <div className="p-4 flex-1">
        {item.category === 'Verbs' && verbForms.length > 0 && (
          <div className="mb-5">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Verb Forms</h4>
              {grammarType && <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-full">{grammarType === 'Irregular' ? 'Group III' : grammarType}</span>}
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-2 grid gap-2">
              {verbForms.map((form) => (
                <div key={form.label} className="grid grid-cols-[1fr_auto] items-center gap-3 px-2 py-1.5 rounded-lg bg-white/70">
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-slate-600">{form.label}</span>
                    <span className="block text-[11px] text-slate-400 font-medium">{form.hint}</span>
                  </span>
                  <span className={`font-bold text-base px-2.5 py-1 rounded-md shadow-sm border border-slate-100 bg-white ${form.accent ? 'text-indigo-600' : 'text-slate-700'}`}>
                    {form.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Examples</h4>
        <div className="space-y-4">
          {item.sentences.map((sent, idx) => {
            const nativeId = `sent-${idx}-native`;
            const aiId = `sent-${idx}-ai`;
            return (
              <div key={idx} className="group relative">
                <div className="flex items-start gap-3">
                   <div className="flex flex-col gap-1 mt-1">
                      <button 
                        onClick={() => playNativeAudio(sent.ja, nativeId)}
                        className={`p-1.5 rounded-full transition-colors flex-shrink-0 ${activeAudioId === nativeId ? 'bg-slate-200 text-slate-700' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'}`}
                      >
                        <VolumeIcon active={activeAudioId === nativeId} />
                      </button>
                       <button 
                        onClick={() => playAiAudio(sent.ja, aiId)}
                        disabled={loadingAudioId === aiId}
                        className={`p-1.5 rounded-full transition-colors flex-shrink-0 ${errorAudioId === aiId ? 'bg-red-50 text-red-500' : activeAudioId === aiId ? 'bg-indigo-100' : 'hover:bg-indigo-50'}`}
                      >
                        {loadingAudioId === aiId ? <SpinnerIcon /> : <SparklesIcon active={activeAudioId === aiId} error={errorAudioId === aiId} />}
                      </button>
                   </div>
                  <div className="flex-1 pr-6">
                    <p className="text-slate-800 text-sm leading-relaxed select-text">{sent.ja}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{sent.zh}</p>
                  </div>
                  <button 
                    onClick={() => handleToggleCollect(sent)}
                    className="absolute top-0 right-0 p-1 rounded-md transition-colors"
                    title={collectedMap[sent.ja] ? "Remove from Collection" : "Add to Collection"}
                  >
                    <BookmarkIcon active={!!collectedMap[sent.ja]} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
