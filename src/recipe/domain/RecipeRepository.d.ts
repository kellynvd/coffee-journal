import { Recipe } from '@/recipe/domain/Recipe';
import { Repository } from '@/_lib/DDD';
import { RecipeId } from '@/recipe/domain/RecipeId';

type RecipeRepository = Repository<Recipe.Type> & {
  findById(id: RecipeId['value']): Promise<Recipe.Type>;
};

export { RecipeRepository };
