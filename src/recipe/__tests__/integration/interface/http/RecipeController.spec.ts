import { Recipe } from '@/recipe/domain/Recipe';
import { makeTestControls, TestControls } from '@/__tests__/TestControls';

describe('RecipeController', () => {
  let controls: TestControls;

  beforeAll(async () => {
    controls = await makeTestControls();
  });

  describe('GET /api/recipes', () => {
    it('returns recipes', async () => {
      const { request, registry: { recipeRepository } } = controls;

      const recipe = Recipe.create({
        id: await recipeRepository.getNextId(),
        coffeeAmount: 18,
        yield: 36,
        temperature: 92,
        grinderSetting: 50,
        preInfusionTime: 10,
        brewTime: 30,
        flavorRange: 5,
        coffee: 'Raro',
        grinder: 'Kingrinder K2'
      });

      await recipeRepository.store(recipe);

      return request()
        .get('/api/recipes')
        .expect(async (res) => {
          expect(res.status).toBe(200);
          expect(res.body).toEqual(expect.objectContaining({
            data: [
              {
                id: recipe.id.value,
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
          }));
        });
    });
  });

  describe('POST /api/recipes', () => {
    it('creates recipe', async () => {
      const { request, registry: { recipeRepository } } = controls;

      return request()
        .post('/api/recipes')
        .send({
          coffeeAmount: 18,
          yield: 36,
          temperature: 92,
          grinderSetting: 50,
          preInfusionTime: 10,
          brewTime: 30,
          flavorRange: 5,
          coffee: 'Raro',
          grinder: 'Kingrinder K2'
        })
        .expect(async (res) => {
          expect(res.status).toBe(201);
          expect(res.body.id).toEqual(expect.stringMatching(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/));
          expect(res.body).toEqual(expect.objectContaining({
            coffeeAmount: 18,
            yield: 36,
            temperature: 92,
            grinderSetting: 50,
            preInfusionTime: 10,
            brewTime: 30,
            flavorRange: 5,
            coffee: 'Raro',
            grinder: 'Kingrinder K2'
          }));

          const recipe = await recipeRepository.findById(res.body.id);

          expect(recipe).toEqual(
            expect.objectContaining({
              coffeeAmount: 18,
              yield: 36,
              temperature: 92,
              grinderSetting: 50,
              preInfusionTime: 10,
              brewTime: 30,
              flavorRange: 5,
              coffee: 'Raro',
              grinder: 'Kingrinder K2'
            })
          );
        });
    });
  })

  describe('PATCH /api/recipes/:id', () => {
    it('updates recipe', async () => {
      const { request, registry: { recipeRepository } } = controls;

      const recipe = Recipe.create({
        id: await recipeRepository.getNextId(),
        coffeeAmount: 18,
        yield: 36,
        temperature: 92,
        grinderSetting: 50,
        preInfusionTime: 10,
        brewTime: 30,
        flavorRange: 5,
        coffee: 'Raro',
        grinder: 'Kingrinder K2'
      });

      await recipeRepository.store(recipe);

      return request()
        .patch(`/api/recipes/${recipe.id.value}`)
        .send({
          coffeeAmount: 17,
          yield: 34,
          temperature: 91,
          grinderSetting: 51,
          preInfusionTime: 12,
          brewTime: 40,
          flavorRange: 7,
          coffee: 'Cyborg',
          grinder: 'Kingrinder K4'
        })
        .expect(async (res) => {
          expect(res.status).toBe(200);
          console.log('>>>>> ERORO')
          expect(res.body).toEqual(expect.objectContaining({
            id: recipe.id.value,
            coffeeAmount: 17,
            yield: 34,
            temperature: 91,
            grinderSetting: 51,
            preInfusionTime: 12,
            brewTime: 40,
            flavorRange: 7,
            coffee: 'Cyborg',
            grinder: 'Kingrinder K4'
          }));

          // const updatedRecipe = await recipeRepository.findById(res.body.id);

          // expect(updatedRecipe).toEqual(
          //   expect.objectContaining({
          //     ccoffeeAmount: 17,
          //     yield: 34,
          //     temperature: 91,
          //     grinderSetting: 51,
          //     preInfusionTime: 12,
          //     brewTime: 40,
          //     flavorRange: 7,
          //     coffee: 'Cyborg',
          //     grinder: 'Kingrinder K4'
          //   })
          // );
        });
    });
  })
});
