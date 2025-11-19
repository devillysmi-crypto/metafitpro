'use client';

import { useState } from 'react';
import { Camera, Dumbbell, Target, TrendingUp, Zap, Award, Clock, Flame, ChevronRight, Scan, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [stats] = useState({
    caloriesConsumed: 1450,
    caloriesBurned: 420,
    caloriesGoal: 2000,
    workoutsCompleted: 3,
    workoutsGoal: 5,
    streak: 7,
    currentPhase: 'Definição Muscular'
  });

  const caloriesRemaining = stats.caloriesGoal - stats.caloriesConsumed + stats.caloriesBurned;
  const caloriesProgress = ((stats.caloriesConsumed - stats.caloriesBurned) / stats.caloriesGoal) * 100;
  const workoutsProgress = (stats.workoutsCompleted / stats.workoutsGoal) * 100;

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00FF88]/10 via-black to-black" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00FF88]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00FF88]/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-20">
          {/* Logo & Slogan */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-white">Meta</span>
              <span className="text-[#00FF88]">Pro</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light">
              Seu corpo, sua meta, sua evolução.
            </p>
            <p className="text-sm md:text-base text-[#00FF88] mt-2 font-medium">
              Escaneou. Contou. Evoluiu.
            </p>
          </div>

          {/* Stats Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {/* Calorias Card */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-[#00FF88]/50 transition-all duration-300">
              <div className="absolute inset-0 bg-[#00FF88]/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#00FF88]/10 rounded-xl border border-[#00FF88]/20">
                    <Flame className="w-6 h-6 text-[#00FF88]" />
                  </div>
                  <span className="text-2xl font-bold text-white">{caloriesRemaining}</span>
                </div>
                <p className="text-sm text-gray-400 mb-3">Calorias Restantes</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Meta: {stats.caloriesGoal}</span>
                    <span className="text-[#00FF88]">{Math.round(caloriesProgress)}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5">
                    <div
                      className="bg-gradient-to-r from-[#00FF88] to-[#00CC6A] h-1.5 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(caloriesProgress, 100)}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>↑ {stats.caloriesConsumed}</span>
                    <span>↓ {stats.caloriesBurned}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Treinos Card */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-[#00FF88]/50 transition-all duration-300">
              <div className="absolute inset-0 bg-[#00FF88]/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#00FF88]/10 rounded-xl border border-[#00FF88]/20">
                    <Dumbbell className="w-6 h-6 text-[#00FF88]" />
                  </div>
                  <span className="text-2xl font-bold text-white">{stats.workoutsCompleted}/{stats.workoutsGoal}</span>
                </div>
                <p className="text-sm text-gray-400 mb-3">Treinos Semanais</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Meta semanal</span>
                    <span className="text-[#00FF88]">{Math.round(workoutsProgress)}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5">
                    <div
                      className="bg-gradient-to-r from-[#00FF88] to-[#00CC6A] h-1.5 rounded-full transition-all duration-500"
                      style={{ width: `${workoutsProgress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Streak Card */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-[#00FF88]/50 transition-all duration-300">
              <div className="absolute inset-0 bg-[#00FF88]/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#00FF88]/10 rounded-xl border border-[#00FF88]/20">
                    <Award className="w-6 h-6 text-[#00FF88]" />
                  </div>
                  <span className="text-2xl font-bold text-white">{stats.streak}</span>
                </div>
                <p className="text-sm text-gray-400 mb-3">Dias de Sequência</p>
                <p className="text-xs text-gray-600">
                  Continue assim! 🔥 Você está no caminho certo
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Scan de Alimentos */}
            <Link href="/nutricao">
              <div className="group relative bg-gradient-to-br from-[#00FF88] to-[#00CC6A] rounded-2xl p-8 cursor-pointer hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-[#00FF88]/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-black/20 rounded-xl">
                    <Camera className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-black">Scan Inteligente</h2>
                    <p className="text-sm text-black/70">Análise por foto</p>
                  </div>
                </div>
                <p className="text-black/80 mb-4">
                  Tire uma foto do seu prato e receba calorias e macros instantaneamente
                </p>
                <div className="flex items-center gap-2 text-black font-semibold">
                  <span>Escanear agora</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Treino Rápido */}
            <Link href="/treinos">
              <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-[#00FF88]/30 rounded-2xl p-8 cursor-pointer hover:scale-[1.02] hover:border-[#00FF88] transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-[#00FF88]/10 rounded-xl border border-[#00FF88]/20">
                    <Zap className="w-8 h-8 text-[#00FF88]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Treino Rápido</h2>
                    <p className="text-sm text-gray-400">Modo voz ativo</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">
                  15 minutos de HIIT com timer e narração de séries
                </p>
                <div className="flex items-center gap-2 text-[#00FF88] font-semibold">
                  <span>Começar treino</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Meta Atual */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-5 h-5 text-[#00FF88]" />
                <h3 className="text-sm font-semibold text-white">Meta Atual</h3>
              </div>
              <p className="text-xl font-bold text-[#00FF88] mb-1">{stats.currentPhase}</p>
              <p className="text-xs text-gray-500">Fase 2 de 4 • 3 semanas restantes</p>
            </div>

            {/* Progresso Semanal */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-5 h-5 text-[#00FF88]" />
                <h3 className="text-sm font-semibold text-white">Progresso</h3>
              </div>
              <p className="text-xl font-bold text-white mb-1">+2.3kg</p>
              <p className="text-xs text-gray-500">Massa muscular esta semana</p>
            </div>

            {/* Ranking */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <BarChart3 className="w-5 h-5 text-[#00FF88]" />
                <h3 className="text-sm font-semibold text-white">Ranking</h3>
              </div>
              <p className="text-xl font-bold text-white mb-1">Top 15%</p>
              <p className="text-xs text-gray-500">Melhor que 85% dos usuários</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="relative bg-gradient-to-br from-gray-900 to-black border border-[#00FF88]/30 rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FF88]/10 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pronto para evoluir?
            </h2>
            <p className="text-gray-400 text-lg mb-6 max-w-2xl">
              MetaPro — O atalho entre o objetivo e o resultado. Mais objetivo que motivação, mais prático que academia.
            </p>
            <Link href="/perfil">
              <button className="bg-[#00FF88] hover:bg-[#00CC6A] text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-[#00FF88]/20">
                Começar agora • $4.99/mês
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
