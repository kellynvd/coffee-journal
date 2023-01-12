import { v4 as uuidv4 } from 'uuid';
import { Recipe } from '@/recipe/domain/Recipe';
import { RecipeId } from '@/recipe/domain/RecipeId';
import { RecipeRepository } from '@/recipe/domain/RecipeRepository';
import { RecipeIdProvider } from '@/recipe/infrastructure/RecipeIdProvider';
import { NotFoundError } from '@/_lib/errors/NotFoundError';

const RECIPES: Array<Recipe.Type> = [];

const makeInMemoryRecipeRepository = (): RecipeRepository => ({
  async getNextId(): Promise<RecipeId> {
    return Promise.resolve(RecipeIdProvider.create(uuidv4()));
  },

  async store(entity: Recipe.Type): Promise<void> {
    RecipeIdProvider.validate(entity.id);

    const index = RECIPES.findIndex((recipe) => recipe.id.value === entity.id.value);

    if (index >= 0) {
      RECIPES[index] = entity;

      return;
    }

    RECIPES.push(entity);
  },

  async findById(id: RecipeId['value']): Promise<Recipe.Type> {
    const recipe = RECIPES.find((recipe) => recipe.id.value === id);

    if (!recipe) {
      throw NotFoundError.create('Recipe not found');
    }

    return recipe;
  }
});

export { makeInMemoryRecipeRepository, RECIPES };
