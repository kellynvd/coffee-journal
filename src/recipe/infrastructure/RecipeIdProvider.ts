import { makeIdProvider } from '@/_lib/IdProvider';
import { RecipeId } from '@/recipe/domain/RecipeId';

const RecipeIdProvider = makeIdProvider<RecipeId>('RecipeId');

export { RecipeIdProvider };
