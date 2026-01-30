import React, { useState, useEffect, useRef } from 'react';
import { explainJapaneseContent, ExplainedTerm, generateSpeech } from '../services/geminiService';

interface SelectionPopupProps {
  text: string;
  position: { top: number; left: number };
  onClose: () => void;
}

export const SelectionPopup: React.FC<SelectionPopupProps> = ({ text, position, onClose }) => {
  const [data, setData] = useState<ExplainedTerm | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  
  // Audio states
  const [isPlaying, setIsPlaying] = useState<string | null>(null); // 'native' | 'ai' | null
  const [isLoadingAi, setIsLoadingAi] = useState(false);
  const [errorAi, setErrorAi] = useState(false);
  const aiAudioCache = useRef<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      // Reset Audio Cache when text changes
      aiAudioCache.current = null; 
      setErrorAi(false);
      
      try {
        const result = await explainJapaneseContent(text);
        if (mounted) setData(result);
      } catch (err) {
        if (mounted) setError(true);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    
    if (text) {
      fetchData();
    }
    
    return () => { mounted = false; };
  }, [text]);

  const playNativeAudio = () => {
    if (!data) return;
    const synth = window.speechSynthesis;
    synth.cancel();
    
    const textToRead = data.kanji || data.kana; 
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.85;

    const voices = synth.getVoices();
    const jaVoice = voices.find(v => v.lang === 'ja-JP' && !v.name.includes('Compact')) || 
                    voices.find(v => v.lang.includes('ja'));
                    
    if (jaVoice) {
      utterance.voice = jaVoice;
    }

    setIsPlaying('native');
    utterance.onend = () => setIsPlaying(null);
    utterance.onerror = () => setIsPlaying(null);

    synth.speak(utterance);
  };

  const playAiAudio = async () => {
    if (!data) return;
    window.speechSynthesis.cancel(); // Stop native if playing
    setErrorAi(false);

    if (aiAudioCache.current) {
        playBlob(aiAudioCache.current);
        return;
    }

    setIsLoadingAi(true);
    try {
        const textToRead = data.kanji || data.kana;
        const url = await generateSpeech(textToRead);
        aiAudioCache.current = url;
        playBlob(url);
    } catch (e) {
        console.error(e);
        setErrorAi(true);
        setTimeout(() => setErrorAi(false), 3000);
    } finally {
        setIsLoadingAi(false);
    }
  };

  const playBlob = (url: string) => {
    const audio = new Audio(url);
    setIsPlaying('ai');
    audio.onended = () => setIsPlaying(null);
    audio.onerror = () => setIsPlaying(null);
    audio.play();
  };

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div 
      ref={popupRef}
      className="fixed z-[100] w-72 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      style={{ 
        top: Math.max(10, position.top - 180),
        left: Math.min(window.innerWidth - 300, Math.max(10, position.left - 144))
      }}
    >
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-3 flex justify-between items-center text-white">
        <span className="text-xs font-bold uppercase tracking-wider opacity-90">Quick Lookup</span>
        <button onClick={onClose} className="hover:bg-white/20 rounded-full p-1 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
      
      <div className="p-4">
        {loading ? (
          <div className="space-y-3">
             <div className="h-6 w-1/2 bg-slate-200 rounded animate-pulse"></div>
             <div className="h-4 w-3/4 bg-slate-200 rounded animate-pulse"></div>
             <div className="h-4 w-full bg-slate-200 rounded animate-pulse"></div>
          </div>
        ) : error ? (
           <div className="text-center py-2">
             <p className="text-red-500 text-sm font-medium">Could not load definition.</p>
           </div>
        ) : data ? (
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 leading-none">{data.kanji}</h3>
                <p className="text-indigo-600 font-medium text-lg">{data.kana}</p>
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={playNativeAudio}
                  className={`p-2 rounded-full transition-colors flex-shrink-0 ${isPlaying === 'native' ? 'bg-slate-200 text-slate-700' : 'bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-600'}`}
                  title="Standard Voice"
                >
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
                    className={isPlaying === 'native' ? "animate-pulse" : ""}
                  >
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  </svg>
                </button>

                <button 
                  onClick={playAiAudio}
                  disabled={isLoadingAi}
                  className={`p-2 rounded-full transition-colors flex-shrink-0 ${errorAi ? 'bg-red-50 text-red-500' : isPlaying === 'ai' ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-indigo-400 hover:bg-indigo-50 hover:text-indigo-600'}`}
                  title="AI Voice (Natural)"
                >
                   {isLoadingAi ? (
                      <svg className="animate-spin h-[18px] w-[18px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                   ) : errorAi ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                   ) : (
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
                        className={isPlaying === 'ai' ? "animate-pulse" : ""}
                      >
                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                      </svg>
                   )}
                </button>
              </div>
            </div>
            
            <p className="text-xs font-mono text-slate-400 mb-3">{data.romaji}</p>
            
            <div className="space-y-2">
               <div className="bg-slate-50 p-2 rounded border border-slate-100">
                 <span className="text-xs font-bold text-slate-400 block mb-0.5 uppercase">Meaning</span>
                 <p className="text-slate-800 font-bold">{data.meaning}</p>
               </div>
               
               <div className="flex items-center gap-2">
                 <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs rounded-md font-medium">{data.type}</span>
               </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};