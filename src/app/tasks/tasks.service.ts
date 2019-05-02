import { Subject } from 'rxjs/Subject';
import { IngredientTask } from '../ingredientTask.model';
import {IngredientComment} from '../IngredientComment.model';
export class TaskService{
    IngredientChanged= new Subject<IngredientTask[]>();

  startedEditing = new Subject<number>();
    private ingredient: IngredientTask[]=[
        new IngredientTask(1, 'Create a Kanaban Board tool','https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg'),
  
      ];


      getIngredients() {
        return this.ingredient.slice();
      }
      getIngredient(index:number){
        return this.ingredient[index];
      }
    
      addIngredient(ingredient: IngredientTask) {
        this.ingredient.push(ingredient);
        this.IngredientChanged.next(this.ingredient.slice());
      }
      updateIngredient(index: number, newIngredient:IngredientTask){
        this.ingredient[index] = newIngredient;
        this.IngredientChanged.next(this.ingredient.slice());
      }
      addIngredients(ingredients: IngredientTask[]) {
        // for (let ingredient of ingredients) {
        //   this.addIngredient(ingredient);
        // }
        this.ingredient.push(...ingredients);
        this.IngredientChanged.next(this.ingredient.slice());
      }
      deleteIngredient(index: number){
        this.ingredient.splice(index,1);
        this.IngredientChanged.next(this.ingredient.slice());
      }
}