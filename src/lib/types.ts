// Tipos do aplicativo fitness

export interface Exercise {
  id: string;
  name: string;
  category: 'cardio' | 'forca' | 'flexibilidade' | 'yoga';
  duration: number; // minutos
  calories: number;
  difficulty: 'iniciante' | 'intermediario' | 'avancado';
  description: string;
}

export interface Workout {
  id: string;
  name: string;
  exercises: Exercise[];
  totalDuration: number;
  totalCalories: number;
  completed: boolean;
  date?: Date;
}

export interface Food {
  id: string;
  name: string;
  calories: number;
  protein: number; // gramas
  carbs: number; // gramas
  fat: number; // gramas
  portion: string;
}

export interface Meal {
  id: string;
  type: 'cafe' | 'almoco' | 'jantar' | 'lanche';
  foods: Food[];
  totalCalories: number;
  date: Date;
}

export interface UserStats {
  caloriesConsumed: number;
  caloriesBurned: number;
  caloriesGoal: number;
  workoutsCompleted: number;
  workoutsGoal: number;
  weight: number;
  weightGoal: number;
}
