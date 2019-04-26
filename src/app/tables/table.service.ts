import { EventEmitter } from '@angular/core';
import { Ingredient } from './../ingredient.model';
export class TableService{
    ingredientsChanged= new EventEmitter<Ingredient[]>();
    private  ingredients: Ingredient[] = [
            new Ingredient('Backlog'),
            new Ingredient('Todo'),
            new Ingredient('In Progress'),
            new Ingredient('Done'),
          ];
          getIngredient(){
              return this.ingredients;
          }
          addIngredient(ingredient:Ingredient){
            this.ingredients.push(ingredient);
            this.ingredientsChanged.emit(this.ingredients.slice());
  
        }
        }