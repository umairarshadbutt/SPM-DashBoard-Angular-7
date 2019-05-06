
import { Box } from '../Box.model';
import { Subject } from 'rxjs/Subject';
import { BoxTask } from '../Task.model';
export class TableService{
    
    ingredientsChanged = new Subject<Box[]>();
  startedEditing = new Subject<number>();
    private  ingredients: Box[] = [
            new Box(1,'Backlog', [new BoxTask(1, "Create a Kanaban Board tool","https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg"),new BoxTask(2, "Create a Kanaban Board tool","https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg"),
            new BoxTask(3, "Create a Kanaban Board tool","https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg"),new BoxTask(4, "Create a Kanaban Board tool","https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg"),
            new BoxTask(5, "Create a Kanaban Board tool","https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg"),new BoxTask(6, "Create a Kanaban Board tool","https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg"),
            new BoxTask(7, "Create a Kanaban Board tool","https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg"),new BoxTask(8, "Create a Kanaban Board tool","https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg"),
          ]),
            new Box(2,'Todo', []),
            new Box(3,'In Progress', []),
            new Box(4,'Done',[]),
          ];
          getIngredients() {
            return this.ingredients.slice();
          }
          getIngredient(index:number){
            return this.ingredients[index];
          }
        
          addIngredient(ingredient: Box) {
            this.ingredients.push(ingredient);
            this.ingredientsChanged.next(this.ingredients.slice());
          }
        
          addIngredients(ingredients: Box[]) {
            // for (let ingredient of ingredients) {
            //   this.addIngredient(ingredient);
            // }
            this.ingredients.push(...ingredients);
            this.ingredientsChanged.next(this.ingredients.slice());
          }
          updateIngredient(index: number, newIngredient:Box){
            this.ingredients[index] = newIngredient;
            this.ingredientsChanged.next(this.ingredients.slice());
          }
          deleteIngredient(index: number){
            this.ingredients.splice(index,1);
            this.ingredientsChanged.next(this.ingredients.slice());
          }
        }