
import React, { useState } from 'react';
import { LessonList } from './components/LessonList';
import { LessonView } from './components/LessonView';
import { CollectionView } from './components/CollectionView';
import { AppState } from './types';

function App() {
  const [view, setView] = useState<AppState>(AppState.HOME);
  const [activeLessonId, setActiveLessonId] = useState<number | null>(null);

  const handleSelectLesson = (id: number) => {
    setActiveLessonId(id);
    setView(AppState.LESSON);
  };

  const handleBack = () => {
    setView(AppState.HOME);
    setActiveLessonId(null);
  };

  const handleOpenCollection = () => {
    setView(AppState.COLLECTION);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {view === AppState.HOME && (
        <LessonList 
          onSelectLesson={handleSelectLesson} 
          onOpenCollection={handleOpenCollection}
        />
      )}
      
      {view === AppState.LESSON && activeLessonId !== null && (
        <LessonView 
          lessonId={activeLessonId} 
          onBack={handleBack} 
        />
      )}

      {view === AppState.COLLECTION && (
        <CollectionView onBack={handleBack} />
      )}
    </div>
  );
}

export default App;
