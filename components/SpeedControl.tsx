import React, { useSyncExternalStore } from 'react';
import { PLAYBACK_RATES, getPlaybackRate, setPlaybackRate, subscribePlaybackRate } from '../services/audio';

/** Segmented control for the pronunciation playback speed (shared by every play button). */
export const SpeedControl: React.FC<{ className?: string }> = ({ className = '' }) => {
  const rate = useSyncExternalStore(subscribePlaybackRate, getPlaybackRate, getPlaybackRate);
  return (
    <div className={`flex items-center gap-2 ${className}`} role="group" aria-label="播放语速">
      <span className="text-xs font-bold text-slate-400 hidden sm:inline">语速</span>
      <div className="flex rounded-full bg-slate-100 p-0.5">
        {PLAYBACK_RATES.map(value => (
          <button
            key={value}
            type="button"
            onClick={() => setPlaybackRate(value)}
            aria-pressed={rate === value}
            className={`px-2.5 py-1 rounded-full text-xs font-bold transition-colors ${rate === value ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
          >
            {value}×
          </button>
        ))}
      </div>
    </div>
  );
};
