import { handler } from '@/_lib/http/handler';

const findRecipesHandler = handler(() => async (_req, res) => {
  const recipes = {
    data: [
      {
        id: 'c0612340-8fbe-46ab-b08d-8476dd2519d8',
        coffeeAmount: 18,
        yield: 36,
        temperature: 92,
        grinderSetting: 50,
        preInfusionTime: 10,
        brewTime: 30,
        flavorRange: 5,
        coffee: 'Raro',
        grinder: 'Kingrinder K2'
      }
    ]
  };

  res.json(recipes);
});

export { findRecipesHandler };
