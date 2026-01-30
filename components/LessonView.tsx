
import React, { useState, useEffect, useMemo } from 'react';
import { VocabularyItem } from '../types';
import { fetchVocabularyForLesson, fetchDetailsForNewWord } from '../services/geminiService';
import { saveCustomWord, deleteCustomWord } from '../services/storage';
import { VocabCard } from './VocabCard';
import { SelectionPopup } from './SelectionPopup';

interface LessonViewProps {
  lessonId: number;
  onBack: () => void;
}

interface PopupState {
  text: string;
  position: { top: number; left: number };
}

export const LessonView: React.FC<LessonViewProps> = ({ lessonId, onBack }) => {
  const [words, setWords] = useState<VocabularyItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Custom Word Panel State
  const [newWordInput, setNewWordInput] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [showExportSuccess, setShowExportSuccess] = useState(false);

  // Selection Popup State
  const [popup, setPopup] = useState<PopupState | null>(null);

  useEffect(() => {
    let mounted = true;
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchVocabularyForLesson(lessonId);
        if (mounted) setWords(data);
      } catch (err) {
        if (mounted) setError("Failed to generate lesson content. Please check your connection or try again.");
      } finally {
        if (mounted) setLoading(false);
      }
    };
    loadData();
    return () => { mounted = false; };
  }, [lessonId]);

  const handleAddCustomWord = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWordInput.trim() || isAdding) return;

    setIsAdding(true);
    try {
      const customWord = await fetchDetailsForNewWord(newWordInput.trim(), lessonId);
      const finalWord = { ...customWord, isCustom: true };
      saveCustomWord(lessonId, finalWord);
      setWords(prev => [...prev, finalWord]);
      setNewWordInput('');
    } catch (err) {
      console.error("Failed to add custom word", err);
      alert("Failed to fetch word details. Please try again.");
    } finally {
      setIsAdding(false);
    }
  };

  const handleDeleteWord = (id: string) => {
    if (confirm("Are you sure you want to remove this custom word?")) {
      deleteCustomWord(lessonId, id);
      setWords(prev => prev.filter(w => w.id !== id));
    }
  };

  const handleExportJson = () => {
    // Generate the exact code block for staticLessons.ts
    const cleanWords = words.map(w => {
      const { id, ...rest } = w; // Remove local IDs to let them be regenerated
      return rest;
    });
    
    const code = JSON.stringify(cleanWords, null, 2);
    navigator.clipboard.writeText(code);
    setShowExportSuccess(true);
    setTimeout(() => setShowExportSuccess(false), 3000);
  };

  // Handle Text Selection
  const handleMouseUp = () => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      return; 
    }

    const text = selection.toString().trim();
    if (text.length > 0 && text.length < 80) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      
      setPopup({
        text: text,
        position: {
          top: rect.top,
          left: rect.left + (rect.width / 2)
        }
      });
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
    <div className="min-h-screen bg-slate-50" onMouseUp={handleMouseUp}>
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 -ml-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
          </button>
          <h2 className="text-xl font-bold text-slate-800">
            Lesson {lessonId} <span className="text-slate-400 font-normal ml-2 text-base">Vocabulary</span>
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsPanelOpen(!isPanelOpen)}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${isPanelOpen ? 'bg-indigo-600 text-white shadow-indigo-200' : 'bg-white border border-slate-200 text-indigo-600 hover:bg-indigo-50 shadow-sm'}`}
          >
            {isPanelOpen ? 'Close Add Panel' : '+ Add Word'}
          </button>
          <div className="text-sm font-medium text-slate-500 hidden sm:block">
            {loading ? 'Loading...' : `${words.length} words`}
          </div>
        </div>
      </div>

      {/* Add Custom Word Panel */}
      {isPanelOpen && (
        <div className="max-w-7xl mx-auto px-6 pt-6">
          <div className="bg-white rounded-xl shadow-lg border-2 border-indigo-100 p-6 animate-in slide-in-from-top-4 duration-300">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <span className="text-indigo-600">✨</span> AI Sensei: Word Assistant
              </h3>
              <button 
                onClick={handleExportJson}
                className="text-xs font-bold text-slate-400 hover:text-indigo-600 flex items-center gap-1 transition-colors bg-slate-50 px-2 py-1 rounded"
              >
                {showExportSuccess ? (
                  <span className="text-green-500">✓ Copied to Clipboard!</span>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
                    Copy Lesson JSON for /data/
                  </>
                )}
              </button>
            </div>
            <p className="text-slate-500 text-sm mb-4">
              Enter any Japanese word (e.g. <span>おみやげ</span>). We'll handle the Kanji, grammar type, and generate 2 example sentences automatically.
            </p>
            <form onSubmit={handleAddCustomWord} className="flex gap-3">
              <input 
                type="text" 
                value={newWordInput}
                onChange={(e) => setNewWordInput(e.target.value)}
                placeholder="Type here..."
                className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all text-lg"
                autoFocus
              />
              <button 
                type="submit"
                disabled={!newWordInput.trim() || isAdding}
                className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all flex items-center gap-2 shadow-lg shadow-indigo-100"
              >
                {isAdding ? (
                   <>
                     <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                     <span>Fetching...</span>
                   </>
                ) : (
                  <span>Fetch & Add</span>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <div className="w-16 h-16 border-4 border-slate-100 border-t-indigo-600 rounded-full animate-spin mb-6"></div>
            <p className="text-lg text-slate-600 font-medium">Opening Lesson {lessonId}...</p>
            <p className="text-sm text-slate-400 mt-2">Connecting to AI Sensei</p>
          </div>
        ) : error ? (
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
                  <button 
                    onClick={() => setIsPanelOpen(true)}
                    className="mt-4 text-indigo-600 font-bold hover:underline"
                  >
                    + Add your first word
                  </button>
               </div>
            )}
          </div>
        )}
      </div>

      {/* Popover Rendered Here */}
      {popup && (
        <SelectionPopup 
          text={popup.text} 
          position={popup.position} 
          onClose={() => {
            setPopup(null);
            window.getSelection()?.removeAllRanges();
          }} 
        />
      )}
    </div>
  );
};
