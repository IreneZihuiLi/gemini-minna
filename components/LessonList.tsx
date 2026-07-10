
import React, { useEffect, useState } from 'react';
import { isLessonCached, getCollectedSentences } from '../services/storage';
import { STATIC_LESSONS } from '../data/staticLessons';

interface LessonListProps {
  onSelectLesson: (id: number) => void;
  onOpenCollection: () => void;
}

const LESSON_COUNT = Math.max(...Object.keys(STATIC_LESSONS).map(Number));

export const LessonList: React.FC<LessonListProps> = ({ onSelectLesson, onOpenCollection }) => {
  const [cachedLessons, setCachedLessons] = useState<Set<number>>(new Set());
  const [collectionCount, setCollectionCount] = useState(0);

  useEffect(() => {
    const checkCache = () => {
      const available = new Set<number>();
      for (let i = 1; i <= LESSON_COUNT; i++) {
        if (STATIC_LESSONS[i] || isLessonCached(i)) {
          available.add(i);
        }
      }
      setCachedLessons(available);
      setCollectionCount(getCollectedSentences().length);
    };
    checkCache();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">
          Minna no <span className="text-indigo-600">Nihongo</span>
        </h1>
        <p className="text-slate-500 max-w-xl mx-auto text-lg mb-8">
          Select a lesson from "Minna no Nihongo Elementary 1 & 2".
        </p>

        {/* Collection Quick Access */}
        <button 
          onClick={onOpenCollection}
          className="group flex items-center gap-3 mx-auto px-6 py-3 bg-white border-2 border-indigo-100 rounded-2xl hover:border-indigo-400 hover:bg-indigo-50 transition-all shadow-sm"
        >
          <div className="p-2 bg-indigo-100 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
          </div>
          <div className="text-left">
            <div className="text-sm font-bold text-slate-700">My Sentence Collection</div>
            <div className="text-xs text-slate-400 font-medium">{collectionCount} items bookmarked</div>
          </div>
          <svg className="ml-2 text-slate-300 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: LESSON_COUNT }, (_, i) => i + 1).map((id) => {
          const isReady = cachedLessons.has(id);
          return (
            <button
              key={id}
              onClick={() => onSelectLesson(id)}
              className="group relative flex flex-col items-center justify-center aspect-square bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-indigo-300 hover:-translate-y-1 transition-all duration-200 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {isReady && (
                <div className="absolute top-2 right-2 text-green-500 bg-green-50 rounded-full p-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              )}
              <span className="relative z-10 text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Lesson</span>
              <span className="relative z-10 text-4xl font-black text-slate-700 group-hover:text-indigo-600 transition-colors">
                {id}
              </span>
              <div className={`absolute bottom-3 ${isReady ? 'text-green-600' : 'text-indigo-500'} opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all text-xs font-semibold`}>
                {isReady ? 'Open' : 'Coming Soon'}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
