import { asFunction } from 'awilix';
import { makeModule } from '@/context';
import { makeInMemoryFindRecipes } from '@/recipe/infrastructure/InMemoryFindRecipes';
import { makeRecipeController } from '@/recipe/interface/http/recipeController';
import { FindRecipes } from '@/recipe/application/query/FindRecipes';
import { CreateRecipe, makeCreateRecipe } from '@/recipe/application/useCases/CreateRecipe';
import { makeInMemoryRecipeRepository } from '@/recipe/infrastructure/InMemoryRecipeRepository';
import { RecipeRepository } from '@/recipe/domain/RecipeRepository';

const recipeModule = makeModule('recipe', async ({ container: { register }, initialize }) => {
  register({
    createRecipe: asFunction(makeCreateRecipe),
    findRecipes: asFunction(makeInMemoryFindRecipes),
    recipeRepository: asFunction(makeInMemoryRecipeRepository),
  });

  await initialize(makeRecipeController);
});

type RecipeRegistry = {
  createRecipe: CreateRecipe;
  findRecipes: FindRecipes;
  recipeRepository: RecipeRepository;
};

export { recipeModule };
export type { RecipeRegistry };
