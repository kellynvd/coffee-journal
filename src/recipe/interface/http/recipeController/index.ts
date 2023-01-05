import { Router } from 'express';
import { findRecipesHandler } from './FindRecipesHandler';

type Dependencies = {
  apiRouter: Router;
};

const makeRecipeController = ({ apiRouter }: Dependencies) => {
  const router = Router();

  /**
   * @swagger
   *
   * /recipes:
   *   get:
   *     tags:
   *       - Recipes
   *     summary: The list of recipes
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: List of recipes
   *         schema:
   *           type: object
   *           properties:
   *             data:
   *               type: array
   *               items:
   *                 $ref: '#/definitions/RecipeDTO'
   */
  router.get('/recipes', findRecipesHandler);

  apiRouter.use(router);
};

export { makeRecipeController };
