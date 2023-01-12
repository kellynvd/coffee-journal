import { Recipe } from '@/recipe/domain/Recipe';
import { RecipeRepository } from '@/recipe/domain/RecipeRepository';
import { ApplicationService } from '@/_lib/DDD';

type Dependencies = {
  recipeRepository: RecipeRepository;
};

type UpdateRecipeDTO = {
  id: string;
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

type UpdateRecipe = ApplicationService<UpdateRecipeDTO, Recipe.Type>;

const makeUpdateRecipe = ({ recipeRepository }: Dependencies): UpdateRecipe => async (payload: UpdateRecipeDTO) => {
  let recipe = await recipeRepository.findById(payload.id)

  recipe = Recipe.update(recipe, {
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

export { makeUpdateRecipe };
export type { UpdateRecipe };
