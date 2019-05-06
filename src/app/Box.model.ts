import { IngredientTask } from './ingredientTask.model';

export class Ingredient {
    constructor(public board_id:number, public name: string, public task:IngredientTask[]) {}
  }