import React, { useEffect, useMemo, useRef, useState } from 'react';
import { VocabularyItem } from '../types';
import { playText, stopAudio } from '../services/audio';
import { TypingState, createState, isComplete, pressKey, remainingRomaji, unitViews } from '../game/romaji';
import { ProgressMap, isMastered, isWeak, loadProgress, loadSettings, recordResults, saveSettings } from '../game/progress';
import {
  DEFAULT_CONFIG, Difficulty, GameConfig, GameMode, LADDER_STAGES, MODE_INFO, PASS_RATE, PRESETS, Preset,
  RoundResult, RoundSize, StageMode, accuracy, blankSentence, canType, pickWords,
} from '../game/session';

interface TypingGameProps {
  lessonId: number;
  words: VocabularyItem[];
  onExit: () => void;
}

type Phase = 'setup' | 'play' | 'result';

const MODES: GameMode[] = ['shadow', 'normal', 'dictation', 'ladder'];
const DIFFICULTIES: Difficulty[] = ['easy', 'standard', 'hard'];
const SIZES: RoundSize[] = [10, 20, 'all'];

function stageTitle(mode: GameMode, stage: StageMode, stageIndex: number, preset: Preset) {
  if (mode === 'ladder') return `闯关 第 ${stageIndex + 1} 关 · ${MODE_INFO[stage].short} · ${preset.label}`;
  return `${MODE_INFO[stage].label} · ${preset.label}`;
}

function formatMs(ms: number) {
  const seconds = Math.round(ms / 1000);
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
}

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
  </svg>
);

export const TypingGame: React.FC<TypingGameProps> = ({ lessonId, words, onExit }) => {
  const [config, setConfig] = useState<GameConfig>(() => loadSettings(DEFAULT_CONFIG));
  const [progress, setProgress] = useState<ProgressMap>(() => loadProgress());
  const [phase, setPhase] = useState<Phase>('setup');
  const [roundWords, setRoundWords] = useState<VocabularyItem[]>([]);
  const [stageIndex, setStageIndex] = useState(0);
  const [roundKey, setRoundKey] = useState(0);
  const [results, setResults] = useState<RoundResult[]>([]);

  const typeable = useMemo(() => words.filter(canType), [words]);
  const stats = useMemo(() => {
    let mastered = 0;
    let weak = 0;
    let seen = 0;
    for (const word of typeable) {
      const stat = progress[word.id];
      if (stat) seen += 1;
      if (isMastered(stat)) mastered += 1;
      if (isWeak(stat)) weak += 1;
    }
    return { total: typeable.length, mastered, weak, unseen: typeable.length - seen };
  }, [typeable, progress]);

  const stage: StageMode = config.mode === 'ladder' ? LADDER_STAGES[stageIndex] : config.mode;
  const preset = PRESETS[config.difficulty];

  const startRound = (list: VocabularyItem[], nextStage = 0) => {
    if (list.length === 0) return;
    setRoundWords(list);
    setStageIndex(nextStage);
    setResults([]);
    setRoundKey(key => key + 1);
    setPhase('play');
  };

  const startFromSetup = (onlyWeak: boolean) => {
    saveSettings(config);
    startRound(pickWords(typeable, progress, config.size, onlyWeak));
  };

  const record = (roundResults: RoundResult[]) => {
    if (stage !== 'shadow' && roundResults.length > 0) {
      setProgress(recordResults(roundResults.map(result => ({ id: result.word.id, correct: result.correct }))));
    }
  };

  const finishRound = (roundResults: RoundResult[]) => {
    stopAudio();
    record(roundResults);
    setResults(roundResults);
    setPhase('result');
  };

  // Leaving a round early still counts the words already answered.
  const quitRound = (partial: RoundResult[]) => {
    stopAudio();
    record(partial);
    setPhase('setup');
  };

  const backToSetup = () => {
    stopAudio();
    setPhase('setup');
  };

  if (phase === 'play') {
    return (
      <PlayScreen
        key={roundKey}
        words={roundWords}
        stage={stage}
        preset={preset}
        title={stageTitle(config.mode, stage, stageIndex, preset)}
        onFinish={finishRound}
        onQuit={quitRound}
      />
    );
  }

  if (phase === 'result') {
    return (
      <ResultScreen
        results={results}
        mode={config.mode}
        stage={stage}
        stageIndex={stageIndex}
        preset={preset}
        onNextStage={() => startRound(roundWords, stageIndex + 1)}
        onRetryStage={() => startRound(roundWords, stageIndex)}
        onAgain={() => startFromSetup(false)}
        onWeakAgain={() => startRound(results.filter(result => !result.correct).map(result => result.word))}
        onSetup={backToSetup}
        onExit={onExit}
      />
    );
  }

  return (
    <SetupScreen
      lessonId={lessonId}
      config={config}
      setConfig={setConfig}
      stats={stats}
      onStart={startFromSetup}
      onExit={onExit}
    />
  );
};

// ---------------------------------------------------------------- setup

interface SetupScreenProps {
  lessonId: number;
  config: GameConfig;
  setConfig: React.Dispatch<React.SetStateAction<GameConfig>>;
  stats: { total: number; mastered: number; weak: number; unseen: number };
  onStart: (onlyWeak: boolean) => void;
  onExit: () => void;
}

const optionClass = (active: boolean) =>
  `text-left rounded-2xl border-2 p-4 transition-all ${active ? 'border-indigo-500 bg-indigo-50 shadow-sm' : 'border-slate-200 bg-white hover:border-indigo-200'}`;

const SetupScreen: React.FC<SetupScreenProps> = ({ lessonId, config, setConfig, stats, onStart, onExit }) => (
  <div className="max-w-3xl mx-auto">
    <div className="mb-8">
      <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest">Typing Practice</p>
      <h3 className="text-3xl font-black text-slate-800 mt-2">Lesson {lessonId} 打字背单词</h3>
      <div className="mt-4 flex flex-wrap gap-2 text-sm font-bold">
        <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600">共 {stats.total} 词</span>
        <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600">已掌握 {stats.mastered}</span>
        <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-500">错词 {stats.weak}</span>
        <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-600">未练 {stats.unseen}</span>
      </div>
    </div>

    <section className="mb-8">
      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">模式</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {MODES.map(mode => (
          <button key={mode} type="button" onClick={() => setConfig(prev => ({ ...prev, mode }))} className={optionClass(config.mode === mode)}>
            <div className="font-black text-slate-800">{MODE_INFO[mode].label}</div>
            <div className="text-sm text-slate-500 mt-1 leading-relaxed">{MODE_INFO[mode].desc}</div>
          </button>
        ))}
      </div>
    </section>

    <section className="mb-8">
      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">难度</h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {DIFFICULTIES.map(difficulty => (
          <button key={difficulty} type="button" onClick={() => setConfig(prev => ({ ...prev, difficulty }))} className={optionClass(config.difficulty === difficulty)}>
            <div className="font-black text-slate-800">{PRESETS[difficulty].label}</div>
            <div className="text-xs text-slate-500 mt-1 leading-relaxed">{PRESETS[difficulty].desc}</div>
          </button>
        ))}
      </div>
    </section>

    <section className="mb-8">
      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">每轮词数</h4>
      <div className="flex flex-wrap gap-3">
        {SIZES.map(size => (
          <button key={String(size)} type="button" onClick={() => setConfig(prev => ({ ...prev, size }))} className={`${optionClass(config.size === size)} px-6 py-3 font-black text-slate-800`}>
            {size === 'all' ? `全部 ${stats.total}` : size}
          </button>
        ))}
      </div>
    </section>

    <div className="rounded-2xl bg-slate-100 p-4 text-sm text-slate-600 leading-relaxed mb-8">
      用英文输入法按罗马音打出假名，比如 がっこう 打 gakkou，词尾的 ん 打 nn。空格重播发音，Tab 偷看，Esc 退出。发音语速由难度决定。跟打模式不计入错词记录。
    </div>

    <div className="flex flex-wrap gap-3">
      <button type="button" onClick={() => onStart(false)} disabled={stats.total === 0} className="px-8 py-3 rounded-xl bg-indigo-600 text-white font-black hover:bg-indigo-700 disabled:opacity-50 transition-colors">
        开始练习
      </button>
      <button type="button" onClick={() => onStart(true)} disabled={stats.weak === 0} className="px-6 py-3 rounded-xl bg-rose-50 text-rose-600 font-black hover:bg-rose-100 disabled:opacity-40 transition-colors">
        只练错词 ({stats.weak})
      </button>
      <button type="button" onClick={onExit} className="px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-colors">
        返回课程
      </button>
    </div>
  </div>
);

// ---------------------------------------------------------------- play

interface PlayScreenProps {
  words: VocabularyItem[];
  stage: StageMode;
  preset: Preset;
  title: string;
  onFinish: (results: RoundResult[]) => void;
  onQuit: (partial: RoundResult[]) => void;
}

const PlayScreen: React.FC<PlayScreenProps> = ({ words, stage, preset, title, onFinish, onQuit }) => {
  const [index, setIndex] = useState(0);
  const word = words[index];
  const [typing, setTyping] = useState<TypingState>(() => createState(word.kana));
  const [mistakes, setMistakes] = useState(0);
  const [failed, setFailed] = useState(false);
  const [flash, setFlash] = useState<'miss' | 'ok' | null>(null);
  const [replaysUsed, setReplaysUsed] = useState(0);
  const [peeksUsed, setPeeksUsed] = useState(0);
  const [peeking, setPeeking] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number | null>(preset.timeLimit);
  const [focused, setFocused] = useState(false);
  const [ime, setIme] = useState(false);
  const [feedback, setFeedback] = useState<RoundResult | null>(null);

  const resultsRef = useRef<RoundResult[]>([]);
  const failedRef = useRef(false);
  const mistakesRef = useRef(0);
  const startRef = useRef(Date.now());
  const inputRef = useRef<HTMLInputElement>(null);
  const timers = useRef<number[]>([]);

  const later = (fn: () => void, ms: number) => {
    const id = window.setTimeout(fn, ms);
    timers.current.push(id);
  };

  useEffect(() => () => {
    timers.current.forEach(id => window.clearTimeout(id));
    stopAudio();
  }, []);

  // New word: reset everything, play it, keep the keyboard focus.
  useEffect(() => {
    setTyping(createState(word.kana));
    setMistakes(0);
    mistakesRef.current = 0;
    setFailed(false);
    failedRef.current = false;
    setReplaysUsed(0);
    setPeeksUsed(0);
    setPeeking(false);
    setFeedback(null);
    setTimeLeft(preset.timeLimit);
    startRef.current = Date.now();
    playText(word.kanji, { rate: preset.rate });
    inputRef.current?.focus();
  }, [index, word, preset]);

  // Countdown (hard difficulty only).
  useEffect(() => {
    if (preset.timeLimit == null || failed || feedback) return;
    const limit = preset.timeLimit;
    const started = Date.now();
    const id = window.setInterval(() => setTimeLeft(Math.max(0, limit - (Date.now() - started) / 1000)), 100);
    return () => window.clearInterval(id);
  }, [index, failed, feedback, preset.timeLimit]);

  useEffect(() => {
    if (timeLeft !== null && timeLeft <= 0 && !failedRef.current && !feedback) fail();
  }, [timeLeft, feedback]);

  const sentenceHint = useMemo(
    () => (preset.sentenceHint && stage !== 'dictation' ? blankSentence(word) : null),
    [word, preset.sentenceHint, stage]
  );

  const fail = () => {
    if (failedRef.current) return;
    failedRef.current = true;
    setFailed(true);
    setPeeking(true);
  };

  const triggerFlash = (kind: 'miss' | 'ok' | null) => {
    setFlash(kind);
    later(() => setFlash(null), 260);
  };

  const replaysLeft = preset.replays == null ? Infinity : Math.max(0, preset.replays - replaysUsed);
  const peeksLeft = preset.peeks == null ? Infinity : Math.max(0, preset.peeks - peeksUsed);

  const replay = () => {
    if (feedback || replaysLeft <= 0) return;
    setReplaysUsed(count => count + 1);
    playText(word.kanji, { rate: preset.rate });
  };

  const peek = () => {
    if (feedback || failedRef.current || peeksLeft <= 0) return;
    setPeeksUsed(count => count + 1);
    setPeeking(true);
    later(() => {
      if (!failedRef.current) setPeeking(false);
    }, 1500);
  };

  const completeWord = (state: TypingState) => {
    const result: RoundResult = {
      word,
      correct: !failedRef.current,
      mistakes: mistakesRef.current,
      ms: Date.now() - startRef.current,
    };
    resultsRef.current = [...resultsRef.current, result];
    setTyping(state);
    setFeedback(result);
    triggerFlash(result.correct ? 'ok' : null);
    const delay = stage === 'shadow' && result.correct ? 450 : 1200;
    later(() => {
      if (index + 1 < words.length) setIndex(index + 1);
      else onFinish(resultsRef.current);
    }, delay);
  };

  const feed = (text: string) => {
    if (feedback) return;
    let state = typing;
    let missed = 0;
    let completed = false;
    for (const raw of text) {
      if (raw === ' ') {
        replay();
        continue;
      }
      const outcome = pressKey(state, raw);
      if (outcome.result === 'miss') {
        missed += 1;
        continue;
      }
      state = outcome.state;
      if (outcome.result === 'complete') {
        completed = true;
        break;
      }
    }
    if (missed > 0) {
      mistakesRef.current += missed;
      setMistakes(mistakesRef.current);
      triggerFlash('miss');
      if (preset.maxMistakes != null && mistakesRef.current >= preset.maxMistakes) fail();
    }
    if (completed) completeWord(state);
    else if (state !== typing) setTyping(state);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    event.target.value = '';
    if (ime || !value) return;
    feed(value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      peek();
    } else if (event.key === ' ') {
      event.preventDefault();
      replay();
    } else if (event.key === 'Escape') {
      event.preventDefault();
      onQuit(resultsRef.current);
    }
  };

  const keepFocus = (event: React.MouseEvent) => event.preventDefault();
  const focusInput = () => inputRef.current?.focus();

  const reveal = failed || peeking || feedback !== null;
  const showKanji = stage === 'shadow' || reveal;
  const showKana = reveal || (stage === 'shadow' && preset.shadowLayers !== 'kanji');
  const showRomaji = reveal || (stage === 'shadow' && preset.shadowLayers === 'kanji-kana-romaji');
  const showMeaning = stage !== 'dictation' || failed || feedback !== null;
  const views = unitViews(typing);
  const answered = resultsRef.current.length;
  const correctCount = resultsRef.current.filter(result => result.correct).length;
  const kanjiDiffers = word.kanji.trim() !== word.kana.trim();

  const cardBorder = flash === 'miss'
    ? 'border-rose-400 bg-rose-50'
    : flash === 'ok'
      ? 'border-emerald-400'
      : feedback
        ? (feedback.correct ? 'border-emerald-300' : 'border-rose-300')
        : 'border-slate-200';

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest">{title}</p>
          <h3 className="text-2xl font-black text-slate-800 mt-1">第 {index + 1} / {words.length} 个</h3>
        </div>
        <div className="flex items-center gap-2 text-sm font-bold">
          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600">对 {correctCount}</span>
          <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-500">错 {answered - correctCount}</span>
          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500">失误 {mistakes}</span>
          <button type="button" onClick={() => onQuit(resultsRef.current)} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200">退出</button>
        </div>
      </div>
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden mb-6">
        <div className="h-full bg-indigo-500 transition-all" style={{ width: `${(index / words.length) * 100}%` }} />
      </div>

      <div onClick={focusInput} className={`relative bg-white rounded-3xl border-2 shadow-sm p-6 sm:p-10 text-center transition-colors cursor-text ${cardBorder}`}>
        <input
          ref={inputRef}
          type="text"
          className="absolute top-0 left-0 w-px h-px opacity-0"
          autoCapitalize="none"
          autoCorrect="off"
          autoComplete="off"
          spellCheck={false}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onCompositionStart={() => setIme(true)}
          onCompositionEnd={event => {
            setIme(false);
            (event.target as HTMLInputElement).value = '';
          }}
          aria-label="输入罗马音"
        />

        <div className="min-h-[5rem]">
          {showMeaning ? (
            <>
              <div className="flex justify-center gap-2 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-500">{word.category}</span>
                {word.grammarType && <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-500">{word.grammarType}</span>}
              </div>
              <p className="text-2xl font-bold text-slate-800">{word.meaning}</p>
              {sentenceHint && !feedback && (
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  {sentenceHint.ja}
                  <span className="text-slate-400 ml-2">{sentenceHint.zh}</span>
                </p>
              )}
            </>
          ) : (
            <p className="text-lg font-bold text-slate-500 mt-4">听发音，打出这个词</p>
          )}
        </div>

        <div className="mt-6">
          {showKanji && kanjiDiffers && <p className="text-3xl font-black text-slate-700 mb-2">{word.kanji}</p>}
          <div className="flex flex-wrap justify-center gap-1 text-4xl font-black tracking-wider min-h-[3rem]">
            {views.map((view, i) => {
              const visible = view.status === 'done' || showKana || (preset.slots === 'first' && i === 0);
              const text = visible ? view.kana : preset.slots === 'none' ? '' : '＿'.repeat(view.kana.length);
              const colour = view.status === 'done'
                ? 'text-indigo-600'
                : view.status === 'current'
                  ? 'text-slate-800 border-b-4 border-indigo-400'
                  : 'text-slate-300';
              return <span key={i} className={colour}>{text}</span>;
            })}
          </div>
          <div className="mt-3 font-mono text-lg tracking-[0.2em] min-h-[1.75rem]">
            <span className="text-indigo-600">{typing.typed}</span>
            {showRomaji
              ? <span className="text-slate-300">{remainingRomaji(typing)}</span>
              : !isComplete(typing) && <span className="text-slate-300 animate-pulse">|</span>}
          </div>
        </div>

        {preset.timeLimit != null && timeLeft !== null && (
          <div className="mt-6">
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className={`h-full ${timeLeft < 3 ? 'bg-rose-500' : 'bg-amber-400'}`} style={{ width: `${(timeLeft / preset.timeLimit) * 100}%` }} />
            </div>
            <p className="text-xs text-slate-400 font-bold mt-1">{timeLeft.toFixed(1)} s</p>
          </div>
        )}

        {feedback && (
          <div className={`mt-6 rounded-xl px-4 py-2 text-sm font-bold ${feedback.correct ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-500'}`}>
            {feedback.correct ? '正确' : '记错了'} · {word.kanji} {kanjiDiffers ? word.kana : ''} · {word.meaning}
          </div>
        )}
        {failed && !feedback && (
          <div className="mt-6 rounded-xl px-4 py-2 text-sm font-bold bg-rose-50 text-rose-500">
            这个词记错了，照着打完再继续
          </div>
        )}

        <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm font-bold">
          <button type="button" onMouseDown={keepFocus} onClick={replay} disabled={replaysLeft <= 0 || feedback !== null} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 disabled:opacity-40">
            <PlayIcon /> 重播{preset.replays != null && ` (${replaysLeft})`}
          </button>
          <button type="button" onMouseDown={keepFocus} onClick={peek} disabled={peeksLeft <= 0 || failed || feedback !== null} className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 disabled:opacity-40">
            偷看{preset.peeks != null && ` (${peeksLeft})`}
          </button>
        </div>

        {ime && <p className="mt-3 text-sm text-rose-500 font-bold">检测到中文或日文输入法，请切换成英文输入</p>}

        {!focused && !feedback && (
          <div className="absolute inset-0 rounded-3xl bg-white/80 backdrop-blur-sm flex items-center justify-center text-lg font-bold text-indigo-600">
            点击这里开始输入
          </div>
        )}
      </div>
      <p className="mt-4 text-center text-xs text-slate-400 font-medium">用罗马音打假名 · 空格 重播发音 · Tab 偷看 · Esc 退出</p>
    </div>
  );
};

// ---------------------------------------------------------------- result

interface ResultScreenProps {
  results: RoundResult[];
  mode: GameMode;
  stage: StageMode;
  stageIndex: number;
  preset: Preset;
  onNextStage: () => void;
  onRetryStage: () => void;
  onAgain: () => void;
  onWeakAgain: () => void;
  onSetup: () => void;
  onExit: () => void;
}

const primaryButton = 'px-6 py-3 rounded-xl bg-indigo-600 text-white font-black hover:bg-indigo-700 transition-colors';
const secondaryButton = 'px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-colors';

const ResultScreen: React.FC<ResultScreenProps> = ({ results, mode, stage, stageIndex, preset, onNextStage, onRetryStage, onAgain, onWeakAgain, onSetup, onExit }) => {
  const [playing, setPlaying] = useState<string | null>(null);
  const rate = accuracy(results);
  const percent = Math.round(rate * 100);
  const wrong = results.filter(result => !result.correct);
  const totalMs = results.reduce((sum, result) => sum + result.ms, 0);
  const mistakes = results.reduce((sum, result) => sum + result.mistakes, 0);
  const passed = rate >= PASS_RATE;
  const lastStage = stageIndex >= LADDER_STAGES.length - 1;

  let headline: string;
  if (mode === 'ladder') {
    headline = passed ? (lastStage ? '三关全部通过！' : `第 ${stageIndex + 1} 关通过`) : `第 ${stageIndex + 1} 关未通过，需要 ${Math.round(PASS_RATE * 100)}%`;
  } else {
    headline = percent >= 90 ? '很稳！' : percent >= 70 ? '不错，再练一轮' : '再来一遍吧';
  }

  return (
    <div className="max-w-3xl mx-auto">
      <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest">{MODE_INFO[stage].label} · {preset.label}</p>
      <h3 className="text-3xl font-black text-slate-800 mt-2">{headline}</h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
        <div className="rounded-2xl bg-white border border-slate-200 p-4">
          <div className="text-xs font-bold text-slate-400 uppercase">正确率</div>
          <div className={`text-3xl font-black mt-1 ${passed ? 'text-emerald-600' : 'text-rose-500'}`}>{percent}%</div>
          <div className="text-xs text-slate-400 mt-1">{results.length - wrong.length} / {results.length}</div>
        </div>
        <div className="rounded-2xl bg-white border border-slate-200 p-4">
          <div className="text-xs font-bold text-slate-400 uppercase">用时</div>
          <div className="text-3xl font-black text-slate-800 mt-1">{formatMs(totalMs)}</div>
          <div className="text-xs text-slate-400 mt-1">平均 {results.length ? (totalMs / results.length / 1000).toFixed(1) : '0'} 秒/词</div>
        </div>
        <div className="rounded-2xl bg-white border border-slate-200 p-4">
          <div className="text-xs font-bold text-slate-400 uppercase">失误按键</div>
          <div className="text-3xl font-black text-slate-800 mt-1">{mistakes}</div>
        </div>
        <div className="rounded-2xl bg-white border border-slate-200 p-4">
          <div className="text-xs font-bold text-slate-400 uppercase">错词</div>
          <div className="text-3xl font-black text-rose-500 mt-1">{wrong.length}</div>
        </div>
      </div>

      {wrong.length > 0 && (
        <section className="mt-8">
          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">本轮错词</h4>
          <div className="space-y-2">
            {wrong.map(result => (
              <div key={result.word.id} className="flex items-center gap-3 rounded-xl bg-white border border-slate-200 p-3">
                <button
                  type="button"
                  onClick={() => playText(result.word.kanji, { onStart: () => setPlaying(result.word.id), onEnd: () => setPlaying(null) })}
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${playing === result.word.id ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-slate-200 text-indigo-500 hover:bg-indigo-50'}`}
                  aria-label="播放读音"
                >
                  <PlayIcon />
                </button>
                <div className="min-w-0">
                  <div className="font-bold text-slate-800">
                    {result.word.kanji}
                    {result.word.kanji.trim() !== result.word.kana.trim() && <span className="ml-2 text-slate-500 font-medium">{result.word.kana}</span>}
                  </div>
                  <div className="text-sm text-slate-500">{result.word.meaning}</div>
                </div>
                <div className="ml-auto text-xs font-bold text-slate-400">失误 {result.mistakes}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        {mode === 'ladder' ? (
          passed ? (
            lastStage
              ? <button type="button" onClick={onAgain} className={primaryButton}>再来一组</button>
              : <button type="button" onClick={onNextStage} className={primaryButton}>进入第 {stageIndex + 2} 关</button>
          ) : (
            <button type="button" onClick={onRetryStage} className={primaryButton}>重打第 {stageIndex + 1} 关</button>
          )
        ) : (
          <>
            <button type="button" onClick={onAgain} className={primaryButton}>再来一轮</button>
            {wrong.length > 0 && <button type="button" onClick={onWeakAgain} className="px-6 py-3 rounded-xl bg-rose-50 text-rose-600 font-black hover:bg-rose-100 transition-colors">只练本轮错词</button>}
          </>
        )}
        <button type="button" onClick={onSetup} className={secondaryButton}>换设置</button>
        <button type="button" onClick={onExit} className={secondaryButton}>返回课程</button>
      </div>
    </div>
  );
};
