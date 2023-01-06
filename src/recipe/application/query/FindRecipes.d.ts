type RecipeListItemDTO = Readonly<{
  data: Array<{
    id: string;
    coffeeAmount: number;
    yield: number;
    temperature: number;
    grinderSetting: number;
    preInfusionTime: number;
    brewTime: number;
    flavorRange: number;
    coffee: string;
    grinder: string;
  }>
}>;

type FindRecipes = () => Promise<RecipeListItemDTO>;

export { FindRecipes };
