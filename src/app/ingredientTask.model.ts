import { Ingredient } from './ingredient.model';
import { IngredientComment } from './IngredientComment.model';

export class IngredientTask{
    constructor(public task_id: number,
        public  task_title:string,
        public   assigned:string,
        public comment:IngredientComment[]){}
}