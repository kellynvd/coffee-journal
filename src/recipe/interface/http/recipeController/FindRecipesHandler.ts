import { FindRecipes } from '@/recipe/application/query/FindRecipes';
import { handler } from '@/_lib/http/handler';

type Dependencies = {
  findRecipes: FindRecipes;
};

const findRecipesHandler = handler(({ findRecipes }: Dependencies) => async (_req, res) => {
  const recipes = await findRecipes();

  res.json(recipes);
});

export { findRecipesHandler };
