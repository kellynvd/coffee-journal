import { Recipe } from '@/recipe/domain/Recipe';
import { RecipeRepository } from '@/recipe/domain/RecipeRepository';
import { ApplicationService } from '@/_lib/DDD';

type Dependencies = {
  recipeRepository: RecipeRepository;
};

type CreateRecipeDTO = {
  coffeeAmount: number;
  yield: number;
  temperature: number;
  grinderSetting: number;
  preInfusionTime: number;
  brewTime: number;
  flavorRange: number;
  coffee: string;
  grinder: string;
};

type CreateRecipe = ApplicationService<CreateRecipeDTO, Recipe.Type>;

const makeCreateRecipe = ({ recipeRepository }: Dependencies): CreateRecipe => async (payload: CreateRecipeDTO) => {
  const id = await recipeRepository.getNextId();

  const recipe = Recipe.create({
    id,
    coffeeAmount: payload.coffeeAmount,
    yield: payload.yield,
    temperature: payload.temperature,
    grinderSetting: payload.grinderSetting,
    preInfusionTime: payload.preInfusionTime,
    brewTime: payload.brewTime,
    flavorRange: payload.flavorRange,
    coffee: payload.coffee,
    grinder: payload.grinder,
  });

  await recipeRepository.store(recipe);

  return recipe;
}

export { makeCreateRecipe };
export type { CreateRecipe };
