// Dados mock para o aplicativo fitness
import { Exercise, Food } from './types';

export const exercises: Exercise[] = [
  {
    id: '1',
    name: 'Corrida',
    category: 'cardio',
    duration: 30,
    calories: 300,
    difficulty: 'intermediario',
    description: 'Corrida em ritmo moderado'
  },
  {
    id: '2',
    name: 'Flexões',
    category: 'forca',
    duration: 15,
    calories: 100,
    difficulty: 'iniciante',
    description: '3 séries de 15 repetições'
  },
  {
    id: '3',
    name: 'Agachamento',
    category: 'forca',
    duration: 20,
    calories: 150,
    difficulty: 'intermediario',
    description: '4 séries de 12 repetições'
  },
  {
    id: '4',
    name: 'Yoga',
    category: 'yoga',
    duration: 45,
    calories: 180,
    difficulty: 'iniciante',
    description: 'Sequência de posturas relaxantes'
  },
  {
    id: '5',
    name: 'HIIT',
    category: 'cardio',
    duration: 25,
    calories: 350,
    difficulty: 'avancado',
    description: 'Treino intervalado de alta intensidade'
  },
  {
    id: '6',
    name: 'Alongamento',
    category: 'flexibilidade',
    duration: 15,
    calories: 50,
    difficulty: 'iniciante',
    description: 'Alongamento completo do corpo'
  },
  {
    id: '7',
    name: 'Abdominais',
    category: 'forca',
    duration: 10,
    calories: 80,
    difficulty: 'iniciante',
    description: '3 séries de 20 repetições'
  },
  {
    id: '8',
    name: 'Burpees',
    category: 'cardio',
    duration: 15,
    calories: 200,
    difficulty: 'avancado',
    description: '5 séries de 10 repetições'
  }
];

export const foods: Food[] = [
  {
    id: '1',
    name: 'Peito de Frango Grelhado',
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6,
    portion: '100g'
  },
  {
    id: '2',
    name: 'Arroz Integral',
    calories: 111,
    protein: 2.6,
    carbs: 23,
    fat: 0.9,
    portion: '100g'
  },
  {
    id: '3',
    name: 'Brócolis Cozido',
    calories: 35,
    protein: 2.4,
    carbs: 7,
    fat: 0.4,
    portion: '100g'
  },
  {
    id: '4',
    name: 'Ovo Cozido',
    calories: 155,
    protein: 13,
    carbs: 1.1,
    fat: 11,
    portion: '1 unidade'
  },
  {
    id: '5',
    name: 'Banana',
    calories: 89,
    protein: 1.1,
    carbs: 23,
    fat: 0.3,
    portion: '1 unidade'
  },
  {
    id: '6',
    name: 'Aveia',
    calories: 389,
    protein: 17,
    carbs: 66,
    fat: 7,
    portion: '100g'
  },
  {
    id: '7',
    name: 'Salmão Grelhado',
    calories: 206,
    protein: 22,
    carbs: 0,
    fat: 13,
    portion: '100g'
  },
  {
    id: '8',
    name: 'Batata Doce',
    calories: 86,
    protein: 1.6,
    carbs: 20,
    fat: 0.1,
    portion: '100g'
  },
  {
    id: '9',
    name: 'Iogurte Grego',
    calories: 59,
    protein: 10,
    carbs: 3.6,
    fat: 0.4,
    portion: '100g'
  },
  {
    id: '10',
    name: 'Whey Protein',
    calories: 120,
    protein: 24,
    carbs: 3,
    fat: 1.5,
    portion: '1 scoop (30g)'
  }
];

export const categoryColors = {
  cardio: 'from-orange-400 to-red-500',
  forca: 'from-blue-500 to-indigo-600',
  flexibilidade: 'from-purple-400 to-pink-500',
  yoga: 'from-green-400 to-teal-500'
};

export const difficultyColors = {
  iniciante: 'bg-green-500',
  intermediario: 'bg-yellow-500',
  avancado: 'bg-red-500'
};

export const mealTypeLabels = {
  cafe: 'Café da Manhã',
  almoco: 'Almoço',
  jantar: 'Jantar',
  lanche: 'Lanche'
};
