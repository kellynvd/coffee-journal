import { FindRecipes } from '@/recipe/application/query/FindRecipes';
import { RECIPES } from '@/recipe/infrastructure/InMemoryRecipeRepository';

const makeInMemoryFindRecipes = (): FindRecipes => async () => {
  return {
    data: RECIPES.map((recipe) => ({
      ...recipe,
      id: recipe.id.value
    }))
  }
};

export { makeInMemoryFindRecipes };
