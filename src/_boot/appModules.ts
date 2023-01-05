import { articleModule, ArticleRegistry } from '@/article';
import { commentModule, CommentRegistry } from '@/comment';
import { recipeModule, RecipeRegistry} from '@/recipe';

// eslint-disable-next-line @typescript-eslint/ban-types
type AppModulesConfig = {};

const appModules = [articleModule, commentModule, recipeModule];

type AppModulesRegistry = ArticleRegistry & CommentRegistry & RecipeRegistry;

export { appModules };
export type { AppModulesConfig, AppModulesRegistry };
