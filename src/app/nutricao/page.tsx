'use client';

import { useState, useRef } from 'react';
import { Camera, Upload, Loader2, ArrowLeft, Flame, Beef, Wheat, Droplet } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/i18n';

interface FoodAnalysis {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  portion: string;
}

export default function NutritionPage() {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);
  
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<FoodAnalysis | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Preview da imagem
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Simular análise (em produção, aqui seria a chamada para API de IA)
    setAnalyzing(true);
    
    setTimeout(() => {
      setResult({
        name: 'Prato Misto',
        calories: 650,
        protein: 45,
        carbs: 60,
        fats: 18,
        portion: '1 prato médio (350g)'
      });
      setAnalyzing(false);
    }, 2000);
  };

  const resetScan = () => {
    setResult(null);
    setImagePreview(null);
    setAnalyzing(false);
  };

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
            <h1 className="text-3xl font-bold text-white mb-1">{t('foodScan')}</h1>
            <p className="text-gray-400">{t('scanDescription')}</p>
          </div>
        </div>

        {/* Scan Area */}
        {!result && !analyzing && (
          <div className="space-y-4">
            {/* Camera/Upload Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="group relative bg-gradient-to-br from-[#00FF88] to-[#00CC6A] rounded-2xl p-8 cursor-pointer hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-[#00FF88]/20"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 bg-black/20 rounded-xl">
                    <Camera className="w-12 h-12 text-black" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-black mb-1">{t('takePhoto')}</h3>
                    <p className="text-sm text-black/70">Use a câmera do dispositivo</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => fileInputRef.current?.click()}
                className="group relative bg-gradient-to-br from-gray-900 to-black border border-[#00FF88]/30 rounded-2xl p-8 cursor-pointer hover:scale-[1.02] hover:border-[#00FF88] transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 bg-[#00FF88]/10 rounded-xl border border-[#00FF88]/20">
                    <Upload className="w-12 h-12 text-[#00FF88]" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-1">{t('uploadPhoto')}</h3>
                    <p className="text-sm text-gray-400">Selecione da galeria</p>
                  </div>
                </div>
              </button>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleFileSelect}
              className="hidden"
            />

            {/* Recent Scans */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-white mb-4">Scans Recentes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2].map((i) => (
                  <div key={i} className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gray-800 rounded-lg" />
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">Prato do Dia</h3>
                        <p className="text-sm text-gray-400">650 kcal • Há 2 horas</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Analyzing State */}
        {analyzing && (
          <div className="bg-gradient-to-br from-gray-900 to-black border border-[#00FF88]/30 rounded-3xl p-12">
            <div className="flex flex-col items-center gap-6">
              {imagePreview && (
                <div className="w-full max-w-md aspect-video rounded-2xl overflow-hidden">
                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}
              <Loader2 className="w-12 h-12 text-[#00FF88] animate-spin" />
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{t('analyzing')}</h3>
                <p className="text-gray-400">Identificando alimentos e calculando macros...</p>
              </div>
            </div>
          </div>
        )}

        {/* Result */}
        {result && (
          <div className="space-y-4">
            {/* Image Preview */}
            {imagePreview && (
              <div className="w-full max-w-2xl mx-auto aspect-video rounded-2xl overflow-hidden border border-gray-800">
                <img src={imagePreview} alt="Scanned food" className="w-full h-full object-cover" />
              </div>
            )}

            {/* Food Info */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#00FF88]/30 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-2">{result.name}</h2>
              <p className="text-gray-400 mb-6">{result.portion}</p>

              {/* Calories */}
              <div className="bg-gradient-to-r from-[#00FF88]/10 to-transparent border border-[#00FF88]/20 rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-[#00FF88]/10 rounded-xl">
                      <Flame className="w-6 h-6 text-[#00FF88]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{t('calories')}</p>
                      <p className="text-3xl font-bold text-white">{result.calories}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">kcal</span>
                </div>
              </div>

              {/* Macros */}
              <div className="grid grid-cols-3 gap-4">
                {/* Protein */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                  <div className="flex flex-col items-center gap-2">
                    <Beef className="w-6 h-6 text-[#00FF88]" />
                    <p className="text-xs text-gray-400">{t('protein')}</p>
                    <p className="text-xl font-bold text-white">{result.protein}g</p>
                  </div>
                </div>

                {/* Carbs */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                  <div className="flex flex-col items-center gap-2">
                    <Wheat className="w-6 h-6 text-[#00FF88]" />
                    <p className="text-xs text-gray-400">{t('carbs')}</p>
                    <p className="text-xl font-bold text-white">{result.carbs}g</p>
                  </div>
                </div>

                {/* Fats */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                  <div className="flex flex-col items-center gap-2">
                    <Droplet className="w-6 h-6 text-[#00FF88]" />
                    <p className="text-xs text-gray-400">{t('fats')}</p>
                    <p className="text-xl font-bold text-white">{result.fats}g</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-6">
                <button className="flex-1 bg-[#00FF88] hover:bg-[#00CC6A] text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105">
                  Adicionar ao Diário
                </button>
                <button
                  onClick={resetScan}
                  className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  Novo Scan
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
