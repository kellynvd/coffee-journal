import { asFunction } from 'awilix';
import { makeModule } from '@/context';
import { makeInMemoryFindRecipes } from '@/recipe/infrastructure/InMemoryFindRecipes';
import { makeRecipeController } from '@/recipe/interface/http/recipeController';
import { FindRecipes } from '@/recipe/application/query/FindRecipes';

const recipeModule = makeModule('recipe', async ({ container: { register }, initialize }) => {
  register({
    findRecipes: asFunction(makeInMemoryFindRecipes),
  });

  await initialize(makeRecipeController);
});

type RecipeRegistry = {
  findRecipes: FindRecipes;
};

export { recipeModule };
export type { RecipeRegistry };
