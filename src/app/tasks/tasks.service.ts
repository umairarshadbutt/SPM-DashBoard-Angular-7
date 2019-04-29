import { Subject } from 'rxjs/Subject';
import { IngredientTask } from '../ingredientTask.model';

export class TaskService{
    IngredientChanged= new Subject<IngredientTask[]>();
    private ingredient: IngredientTask[]=[
        new IngredientTask(1, 'Create a Kanaban Board tool','https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg',),
        new IngredientTask(2, 'Create a Kanaban Board tool','https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg',),

        new IngredientTask(3, 'Create a Kanaban Board tool','https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg',),

        new IngredientTask(4, 'Create a Kanaban Board tool','https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg',),

      ];


      getIngredients() {
        return this.ingredient.slice();
      }
    
      addIngredient(ingredient: IngredientTask) {
        this.ingredient.push(ingredient);
        this.IngredientChanged.next(this.ingredient.slice());
      }
    
      addIngredients(ingredients: IngredientTask[]) {
        // for (let ingredient of ingredients) {
        //   this.addIngredient(ingredient);
        // }
        this.ingredient.push(...ingredients);
        this.IngredientChanged.next(this.ingredient.slice());
      }
}