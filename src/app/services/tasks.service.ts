import { Subject } from 'rxjs/Subject';
import { BoxTask } from '../BoxTask.model';
import {IngredientComment} from '../IngredientComment.model';
export class TaskService{
    IngredientChanged= new Subject<BoxTask[]>();

  startedEditing = new Subject<number>();
    private task: BoxTask[]=[
        new BoxTask(1, 'Create a Kanaban Board tool','https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg'),
        new BoxTask(2, 'Create a Kanaban Board tool','https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg'),
        new BoxTask(3, 'Create a Kanaban Board tool','https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg'),
        new BoxTask(4, 'Create a Kanaban Board tool','https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg'),
      ];


      getIngredients() {
        return this.task.slice();
      }
      getIngredient(index:number){
        return this.task[index];
      }
    
      addIngredient(task: BoxTask) {
        this.task.push(task);
        this.IngredientChanged.next(this.task.slice());
      }
      updateIngredient(index: number, newIngredient:BoxTask){
        this.task[index] = newIngredient;
        this.IngredientChanged.next(this.task.slice());
      }
      addIngredients(ingredients: BoxTask[]) {
        // for (let ingredient of ingredients) {
        //   this.addIngredient(ingredient);
        // }
        this.task.push(...ingredients);
        this.IngredientChanged.next(this.task.slice());
      }
      deleteIngredient(index: number){
        this.task.splice(index,1);
        this.IngredientChanged.next(this.task.slice());
      }
}