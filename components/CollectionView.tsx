
import React, { useState, useEffect, useRef } from 'react';
import { CollectedSentence } from '../types';
import { getCollectedSentences, toggleCollectSentence } from '../services/storage';

interface CollectionViewProps {
  onBack: () => void;
}

export const CollectionView: React.FC<CollectionViewProps> = ({ onBack }) => {
  const [collection, setCollection] = useState<CollectedSentence[]>([]);
  const [activeAudioId, setActiveAudioId] = useState<string | null>(null);
  const synth = useRef(window.speechSynthesis);

  useEffect(() => {
    setCollection(getCollectedSentences());
  }, []);

  const handleRemove = (item: CollectedSentence) => {
    toggleCollectSentence(item);
    setCollection(getCollectedSentences());
  };

  const playNative = (text: string, id: string) => {
    synth.current.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.85;
    setActiveAudioId(id);
    utterance.onend = () => setActiveAudioId(null);
    synth.current.speak(utterance);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center gap-4 shadow-sm">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
        </button>
        <h2 className="text-xl font-bold text-slate-800">My Sentence Collection</h2>
        <span className="ml-auto text-sm font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full">{collection.length} items</span>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        {collection.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-slate-200">
            <div className="text-slate-300 mb-4 inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-700">Your collection is empty</h3>
            <p className="text-slate-500 mt-2">Bookmark sentences in any lesson to see them here!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {collection.map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-4 group">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold bg-indigo-50 text-indigo-500 px-2 py-0.5 rounded uppercase tracking-wider">
                      From: {item.sourceKanji} ({item.sourceMeaning})
                    </span>
                  </div>
                  <p className="text-lg text-slate-800 font-medium leading-relaxed">{item.ja}</p>
                  <p className="text-slate-500 text-sm mt-1">{item.zh}</p>
                </div>
                
                <div className="flex sm:flex-col items-center gap-2 border-t sm:border-t-0 sm:border-l border-slate-100 pt-3 sm:pt-0 sm:pl-4">
                  <button 
                    onClick={() => playNative(item.ja, `n-${item.id}`)}
                    className={`p-2 rounded-full ${activeAudioId === `n-${item.id}` ? 'bg-slate-200 text-slate-700' : 'bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600'}`}
                    aria-label="播放读音"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                  </button>
                  <button 
                    onClick={() => handleRemove(item)}
                    className="p-2 rounded-full bg-red-50 text-red-300 hover:bg-red-100 hover:text-red-500 ml-auto sm:ml-0"
                    title="Remove"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
