import { makeTestControls, TestControls } from '@/__tests__/TestControls';

describe('RecipeController', () => {
  let controls: TestControls;

  beforeAll(async () => {
    controls = await makeTestControls();
  });

  describe('GET /api/recipes', () => {
    it('returns recipes', async () => {
      const { request } = controls;

      return request()
        .get('/api/recipes')
        .expect(async (res) => {
          expect(res.status).toBe(200);
          expect(res.body).toEqual(expect.objectContaining({
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
          }));
        });
    });
  });
});
