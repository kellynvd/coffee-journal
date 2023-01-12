import { AggregateRoot } from '@/_lib/DDD';
import { RecipeId } from '@/recipe/domain/RecipeId';

namespace Recipe {
  type Recipe = AggregateRoot<RecipeId> &
    Readonly<{
      coffeeAmount: number;
      yield: number;
      temperature: number;
      grinderSetting: number;
      preInfusionTime: number;
      brewTime: number;
      flavorRange: number;
      coffee: string;
      grinder: string;
    }>;

  type RecipeProps = Readonly<{
    id: RecipeId;
    coffeeAmount: number;
    yield: number;
    temperature: number;
    grinderSetting: number;
    preInfusionTime: number;
    brewTime: number;
    flavorRange: number;
    coffee: string;
    grinder: string;
  }>;

  export const create = (props: RecipeProps): Recipe => ({
    id: props.id,
    coffeeAmount: props.coffeeAmount,
    yield: props.yield,
    temperature: props.temperature,
    grinderSetting: props.grinderSetting,
    preInfusionTime: props.preInfusionTime,
    brewTime: props.brewTime,
    flavorRange: props.flavorRange,
    coffee: props.coffee,
    grinder: props.grinder,
  })

  export const update = (self: Recipe, props: Omit<RecipeProps, 'id'>): Recipe => ({
    ...self,
    ...props,
  })

  export type Type = Recipe;
}

export { Recipe };
