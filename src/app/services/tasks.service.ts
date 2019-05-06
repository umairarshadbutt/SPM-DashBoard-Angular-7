import { Subject } from 'rxjs/Subject';
import { BoxTask } from '../Task.model';
import {IngredientComment} from '../IngredientComment.model';
export class TaskService{
    IngredientChanged= new Subject<BoxTask[]>();

  startedEditing = new Subject<number>();
    private ingredient: BoxTask[]=[
        new BoxTask(1, 'Create a Kanaban Board tool','https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg'),
        new BoxTask(2, 'Create a Kanaban Board tool','https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg'),
        new BoxTask(3, 'Create a Kanaban Board tool','https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg'),
        new BoxTask(4, 'Create a Kanaban Board tool','https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg'),
      ];


      getIngredients() {
        return this.ingredient.slice();
      }
      getIngredient(index:number){
        return this.ingredient[index];
      }
    
      addIngredient(ingredient: BoxTask) {
        this.ingredient.push(ingredient);
        this.IngredientChanged.next(this.ingredient.slice());
      }
      updateIngredient(index: number, newIngredient:BoxTask){
        this.ingredient[index] = newIngredient;
        this.IngredientChanged.next(this.ingredient.slice());
      }
      addIngredients(ingredients: BoxTask[]) {
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