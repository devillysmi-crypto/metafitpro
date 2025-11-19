'use client';

import { useState } from 'react';
import { Dumbbell, Play, Pause, RotateCcw, ArrowLeft, Clock, Zap, Target } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/i18n';

interface Exercise {
  name: string;
  sets: number;
  reps: string;
  rest: number;
  completed: boolean;
}

export default function WorkoutsPage() {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);
  
  const [exercises, setExercises] = useState<Exercise[]>([
    { name: 'Supino Reto', sets: 4, reps: '8-12', rest: 90, completed: false },
    { name: 'Supino Inclinado', sets: 3, reps: '10-12', rest: 60, completed: false },
    { name: 'Crucifixo', sets: 3, reps: '12-15', rest: 60, completed: false },
    { name: 'Tríceps Pulley', sets: 3, reps: '12-15', rest: 45, completed: false },
    { name: 'Tríceps Testa', sets: 3, reps: '10-12', rest: 60, completed: false },
  ]);

  const [activeWorkout, setActiveWorkout] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [currentSet, setCurrentSet] = useState(1);
  const [isResting, setIsResting] = useState(false);
  const [restTimer, setRestTimer] = useState(0);

  const toggleExerciseComplete = (index: number) => {
    const newExercises = [...exercises];
    newExercises[index].completed = !newExercises[index].completed;
    setExercises(newExercises);
  };

  const startWorkout = () => {
    setActiveWorkout(true);
    setCurrentExercise(0);
    setCurrentSet(1);
  };

  const nextSet = () => {
    const exercise = exercises[currentExercise];
    if (currentSet < exercise.sets) {
      setCurrentSet(currentSet + 1);
      setIsResting(true);
      setRestTimer(exercise.rest);
    } else {
      // Próximo exercício
      if (currentExercise < exercises.length - 1) {
        setCurrentExercise(currentExercise + 1);
        setCurrentSet(1);
        setIsResting(false);
      } else {
        // Treino completo
        setActiveWorkout(false);
      }
    }
  };

  const completedCount = exercises.filter(e => e.completed).length;
  const progress = (completedCount / exercises.length) * 100;

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <button className="p-2 bg-gray-900 hover:bg-gray-800 rounded-xl border border-gray-800 transition-colors">
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">{t('todayWorkout')}</h1>
            <p className="text-gray-400">Peito e Tríceps • 45-60 min</p>
          </div>
        </div>

        {!activeWorkout ? (
          <>
            {/* Progress */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">{t('progress')}</p>
                  <p className="text-2xl font-bold text-white">{completedCount}/{exercises.length} {t('exercises')}</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-[#00FF88]">{Math.round(progress)}%</p>
                </div>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-[#00FF88] to-[#00CC6A] h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Exercises List */}
            <div className="space-y-3 mb-6">
              {exercises.map((exercise, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-gray-900 to-black border rounded-xl p-5 transition-all duration-300 ${
                    exercise.completed
                      ? 'border-[#00FF88]/50 bg-[#00FF88]/5'
                      : 'border-gray-800 hover:border-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => toggleExerciseComplete(index)}
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        exercise.completed
                          ? 'border-[#00FF88] bg-[#00FF88]'
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                    >
                      {exercise.completed && (
                        <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                    
                    <div className="flex-1">
                      <h3 className={`font-semibold mb-1 ${
                        exercise.completed ? 'text-gray-500 line-through' : 'text-white'
                      }`}>
                        {exercise.name}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>{exercise.sets} séries</span>
                        <span>•</span>
                        <span>{exercise.reps} reps</span>
                        <span>•</span>
                        <span>{exercise.rest}s descanso</span>
                      </div>
                    </div>

                    <Dumbbell className={`w-5 h-5 ${
                      exercise.completed ? 'text-[#00FF88]' : 'text-gray-600'
                    }`} />
                  </div>
                </div>
              ))}
            </div>

            {/* Start Workout Button */}
            <button
              onClick={startWorkout}
              className="w-full bg-gradient-to-r from-[#00FF88] to-[#00CC6A] hover:from-[#00CC6A] hover:to-[#00FF88] text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-[#00FF88]/20 flex items-center justify-center gap-3"
            >
              <Play className="w-6 h-6" />
              {t('startWorkout')} com Modo Voz
            </button>
          </>
        ) : (
          /* Active Workout */
          <div className="space-y-6">
            {/* Current Exercise */}
            <div className="bg-gradient-to-br from-[#00FF88]/10 to-transparent border border-[#00FF88]/30 rounded-3xl p-8">
              <div className="text-center mb-6">
                <p className="text-sm text-gray-400 mb-2">Exercício {currentExercise + 1} de {exercises.length}</p>
                <h2 className="text-3xl font-bold text-white mb-4">{exercises[currentExercise].name}</h2>
                <div className="flex items-center justify-center gap-6 text-gray-300">
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-[#00FF88]" />
                    <span>Série {currentSet}/{exercises[currentExercise].sets}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#00FF88]" />
                    <span>{exercises[currentExercise].reps} reps</span>
                  </div>
                </div>
              </div>

              {isResting ? (
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="60"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-gray-800"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="60"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 60}`}
                        strokeDashoffset={`${2 * Math.PI * 60 * (1 - restTimer / exercises[currentExercise].rest)}`}
                        className="text-[#00FF88] transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">{restTimer}</span>
                    </div>
                  </div>
                  <p className="text-xl text-gray-400 mb-6">Descansando...</p>
                  <button
                    onClick={() => setIsResting(false)}
                    className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors"
                  >
                    Pular Descanso
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <button
                    onClick={nextSet}
                    className="bg-[#00FF88] hover:bg-[#00CC6A] text-black font-bold py-4 px-12 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-[#00FF88]/20 text-xl"
                  >
                    {currentSet < exercises[currentExercise].sets ? 'Próxima Série' : 'Próximo Exercício'}
                  </button>
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="flex gap-3">
              <button
                onClick={() => setActiveWorkout(false)}
                className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Pause className="w-5 h-5" />
                Pausar
              </button>
              <button
                onClick={() => {
                  setActiveWorkout(false);
                  setCurrentExercise(0);
                  setCurrentSet(1);
                }}
                className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Reiniciar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
