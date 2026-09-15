import React, { useState } from 'react';
import { GrammarPoint } from '../types';
import { playText } from '../services/audio';

interface GrammarCardProps {
  point: GrammarPoint;
  index: number;
}

export const GrammarCard: React.FC<GrammarCardProps> = ({ point, index }) => {
  const [activeExample, setActiveExample] = useState<number | null>(null);
  const playExample = (text: string, exampleIndex: number) => {
    playText(text, {
      onStart: () => setActiveExample(exampleIndex),
      onEnd: () => setActiveExample(null)
    });
  };

  return (
    <article className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
      <div className="bg-slate-50 border-b border-slate-100 p-4">
        <div className="flex items-start gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white text-sm font-black">
            {index + 1}
          </span>
          <div className="min-w-0">
            <h4 className="text-lg font-bold text-slate-800 leading-tight">{point.title}</h4>
            <p className="mt-2 inline-flex rounded-lg bg-white border border-indigo-100 px-3 py-1.5 text-sm font-bold text-indigo-600 shadow-sm">
              {point.pattern}
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 flex-1">
        <div className="space-y-3">
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Meaning</div>
            <p className="text-sm font-semibold text-slate-700 leading-relaxed">{point.meaning}</p>
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">How to Use</div>
            <p className="text-sm text-slate-600 leading-relaxed">{point.usage}</p>
          </div>
          {point.tip && (
            <div className="rounded-lg border border-amber-100 bg-amber-50 px-3 py-2 text-sm text-amber-800">
              <span className="font-bold">Tip: </span>{point.tip}
            </div>
          )}
        </div>

        <div className="mt-5">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Examples</div>
          <div className="space-y-3">
            {point.examples.map((example, exampleIndex) => (
              <div key={`${point.id}-ex-${exampleIndex}`} className="rounded-lg bg-slate-50 border border-slate-100 p-3 flex items-start gap-3">
                <button
                  type="button"
                  onClick={() => playExample(example.ja, exampleIndex)}
                  className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${activeExample === exampleIndex ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-slate-200 text-indigo-500 hover:bg-indigo-50'}`}
                  aria-label="播放例句读音"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  </svg>
                </button>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-800 leading-relaxed select-text">{example.ja}</p>
                  <p className="text-xs text-slate-500 mt-1">{example.zh}</p>
                  {example.note && <p className="text-xs text-indigo-500 mt-2 font-medium">{example.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
