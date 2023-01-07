import { Recipe } from '@/recipe/domain/Recipe';
import { RecipeIdProvider } from '@/recipe/infrastructure/RecipeIdProvider';
import { ApplicationService } from '@/_lib/DDD';

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

const makeCreateRecipe = (): CreateRecipe => async (payload: CreateRecipeDTO) => {
  const id = RecipeIdProvider.create('c0612340-8fbe-46ab-b08d-8476dd2519d8')

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
  })

  return recipe;
}

export { makeCreateRecipe };
export type { CreateRecipe };
