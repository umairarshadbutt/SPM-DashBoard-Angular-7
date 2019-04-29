
import {
  Component,
  OnInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import { TaskService } from '../tasks.service';
import { IngredientTask } from 'src/app/ingredientTask.model';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})



export class EditTaskComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('pic') picRef: ElementRef;



  constructor(private taskService: TaskService) { }
  ingredients: IngredientTask[];
  private subscription: Subscription;
  ngOnInit() {
    this.ingredients = this.taskService.getIngredients();
    this.subscription = this.taskService.IngredientChanged
      .subscribe(
        (ingredients: IngredientTask[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const ingpic = this.picRef.nativeElement.value;
    const newIngredient = new IngredientTask(ingName, ingAmount,ingpic);
    this.taskService.addIngredient(newIngredient);
  }

}
