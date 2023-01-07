import { asFunction } from 'awilix';
import { makeModule } from '@/context';
import { makeInMemoryFindRecipes } from '@/recipe/infrastructure/InMemoryFindRecipes';
import { makeRecipeController } from '@/recipe/interface/http/recipeController';
import { FindRecipes } from '@/recipe/application/query/FindRecipes';
import { CreateRecipe, makeCreateRecipe } from '@/recipe/application/useCases/CreateRecipe';

const recipeModule = makeModule('recipe', async ({ container: { register }, initialize }) => {
  register({
    createRecipe: asFunction(makeCreateRecipe),
    findRecipes: asFunction(makeInMemoryFindRecipes),
  });

  await initialize(makeRecipeController);
});

type RecipeRegistry = {
  createRecipe: CreateRecipe;
  findRecipes: FindRecipes;
};

export { recipeModule };
export type { RecipeRegistry };
