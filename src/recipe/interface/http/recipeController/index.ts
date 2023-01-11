import { Router } from 'express';
import { createRecipeHandler } from '@/recipe/interface/http/recipeController/CreateRecipeHandler';
import { updateRecipeHandler } from '@/recipe/interface/http/recipeController/UpdateRecipeHandler';
import { findRecipesHandler } from '@/recipe/interface/http/recipeController/FindRecipesHandler';

type Dependencies = {
  apiRouter: Router;
};

const makeRecipeController = ({ apiRouter }: Dependencies) => {
  const router = Router();

  /**
   * @swagger
   *
   * /recipes:
   *   post:
   *     tags:
   *       - Recipes
   *     summary: Create recipe
   *     parameters:
   *       - in: body
   *         name: recipe
   *         description: Recipe payload
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             coffeeAmount:
   *               type: integer
   *               required: true
   *             yield:
   *               type: integer
   *               required: true
   *             temperature:
   *               type: integer
   *               required: true
   *             grinderSetting:
   *               type: integer
   *               required: true
   *             preInfusionTime:
   *               type: integer
   *               required: true
   *             brewTime:
   *               type: integer
   *               required: true
   *             flavorRange:
   *               type: integer
   *               required: true
   *             coffee:
   *               type: string
   *               required: true
   *             grinder:
   *               type: string
   *               required: true
   *     produces:
   *       - application/json
   *     responses:
   *       201:
   *         description: Recipe created
   *         schema:
   *           $ref: '#/definitions/RecipeDTO'
   */
  router.post('/recipes', createRecipeHandler);

  /**
   * @swagger
   *
   * /recipes:
   *   patch:
   *     tags:
   *       - Recipes
   *     summary: Update recipe
   *     parameters:
   *       - in: body
   *         name: recipe
   *         description: Recipe payload
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             coffeeAmount:
   *               type: integer
   *               required: true
   *             yield:
   *               type: integer
   *               required: true
   *             temperature:
   *               type: integer
   *               required: true
   *             grinderSetting:
   *               type: integer
   *               required: true
   *             preInfusionTime:
   *               type: integer
   *               required: true
   *             brewTime:
   *               type: integer
   *               required: true
   *             flavorRange:
   *               type: integer
   *               required: true
   *             coffee:
   *               type: string
   *               required: true
   *             grinder:
   *               type: string
   *               required: true
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Recipe updated
   *         schema:
   *           $ref: '#/definitions/RecipeDTO'
   */
  router.patch('/recipes/:id', updateRecipeHandler);

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
