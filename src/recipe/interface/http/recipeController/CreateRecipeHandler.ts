import { CreateRecipe } from '@/recipe/application/useCases/CreateRecipe';
import { handler } from '@/_lib/http/handler';
import { HttpStatus } from '@/_lib/http/HttpStatus';

type Dependencies = {
  createRecipe: CreateRecipe;
};

const createRecipeHandler = handler(({ createRecipe }: Dependencies) => async (req, res) => {
  const {
    coffeeAmount,
    yield: brewYield,
    temperature,
    grinderSetting,
    preInfusionTime,
    brewTime,
    flavorRange,
    coffee,
    grinder,
  } = req.body;

  const recipe = await createRecipe({
    coffeeAmount,
    yield: brewYield,
    temperature,
    grinderSetting,
    preInfusionTime,
    brewTime,
    flavorRange,
    coffee,
    grinder,
  });

  const serializedRecipe = { ...recipe, id: recipe.id.value };

  res.status(HttpStatus.CREATED).json(serializedRecipe);
});

export { createRecipeHandler };
