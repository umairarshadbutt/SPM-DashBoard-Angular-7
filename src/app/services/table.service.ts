
import { Ingredient } from '../Box.model';
import { Subject } from 'rxjs/Subject';
import { IngredientTask } from '../Task.model';
export class TableService{
    
    ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
    private  ingredients: Ingredient[] = [
            new Ingredient(1,'Backlog', [new IngredientTask(1, "Create a Kanaban Board tool","https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg"),new IngredientTask(2, "Create a Kanaban Board tool","https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg"),
            new IngredientTask(3, "Create a Kanaban Board tool","https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg"),new IngredientTask(4, "Create a Kanaban Board tool","https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg"),
            new IngredientTask(5, "Create a Kanaban Board tool","https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg"),new IngredientTask(6, "Create a Kanaban Board tool","https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg"),
            new IngredientTask(7, "Create a Kanaban Board tool","https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg"),new IngredientTask(8, "Create a Kanaban Board tool","https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg"),
          ]),
            new Ingredient(2,'Todo', []),
            new Ingredient(3,'In Progress', []),
            new Ingredient(4,'Done',[]),
          ];
          getIngredients() {
            return this.ingredients.slice();
          }
          getIngredient(index:number){
            return this.ingredients[index];
          }
        
          addIngredient(ingredient: Ingredient) {
            this.ingredients.push(ingredient);
            this.ingredientsChanged.next(this.ingredients.slice());
          }
        
          addIngredients(ingredients: Ingredient[]) {
            // for (let ingredient of ingredients) {
            //   this.addIngredient(ingredient);
            // }
            this.ingredients.push(...ingredients);
            this.ingredientsChanged.next(this.ingredients.slice());
          }
          updateIngredient(index: number, newIngredient:Ingredient){
            this.ingredients[index] = newIngredient;
            this.ingredientsChanged.next(this.ingredients.slice());
          }
          deleteIngredient(index: number){
            this.ingredients.splice(index,1);
            this.ingredientsChanged.next(this.ingredients.slice());
          }
        }