import { useQuery } from "react-query";

export type Recipe = {
  title: string;
  description: string;
  duration: number;
  ingredients: string[];
  instructions: string[];
  authors: string[];
};

export const fetchRecipes = async () => {
  const response = await fetch("/public/recipes.json");
  const recipes = (await response.json()) as Record<string, Recipe>;
  return recipes;
};

export const useRecipes = () => {
  const { data, isLoading, isError } = useQuery("recipes", fetchRecipes);

  return { recipes: data, isLoading, isError };
};
