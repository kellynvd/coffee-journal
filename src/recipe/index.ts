import { makeRecipeController } from '@/recipe/interface/http/recipeController';
import { makeModule } from '@/context';

const recipeModule = makeModule('recipe', async ({ initialize }) => {
  await initialize(makeRecipeController);
});

type RecipeRegistry = {};

export { recipeModule };
export type { RecipeRegistry };
