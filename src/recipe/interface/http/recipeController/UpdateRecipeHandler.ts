import { UpdateRecipe } from '@/recipe/application/useCases/UpdateRecipe';
import { handler } from '@/_lib/http/handler';
import { HttpStatus } from '@/_lib/http/HttpStatus';

type Dependencies = {
  updateRecipe: UpdateRecipe;
}

const updateRecipeHandler = handler(({ updateRecipe }: Dependencies ) => async (req, res) => {
  const { id } = req.params;
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

  const recipe = await updateRecipe({
    id,
    coffeeAmount,
    yield: brewYield,
    temperature,
    grinderSetting,
    preInfusionTime,
    brewTime,
    flavorRange,
    coffee,
    grinder,
  })

  const serializedRecipe = { ...recipe, id: recipe.id.value };

  res.status(HttpStatus.OK).json(serializedRecipe);
});

export { updateRecipeHandler };
