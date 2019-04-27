
import { Ingredient } from './../ingredient.model';
import { Subject } from 'rxjs/Subject';
export class TableService{
    
    ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
    private  ingredients: Ingredient[] = [
            new Ingredient('Backlog'),
            new Ingredient('Todo'),
            new Ingredient('In Progress'),
            new Ingredient('Done'),
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