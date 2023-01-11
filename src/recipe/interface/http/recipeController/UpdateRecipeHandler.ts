import { handler } from '@/_lib/http/handler';
import { HttpStatus } from '@/_lib/http/HttpStatus';

const updateRecipeHandler = handler(() => async (req, res) => {
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

  const recipe = {
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
  };

  res.status(HttpStatus.OK).json(recipe);
});

export { updateRecipeHandler };
