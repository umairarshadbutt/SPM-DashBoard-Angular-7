
import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { TaskService } from '../tasks.service';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';
import { IngredientTask } from '../../ingredientTask.model';
import { IngredientComment} from '../../IngredientComment.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})



export class EditTaskComponent implements OnInit, OnDestroy{
  @ViewChild('f') slForm:NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex:number;
  editedItem:IngredientTask;


  constructor(private taskService: TaskService) { }
  ngOnInit() {
    this.subscription= this.taskService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex=index;
        this.editMode = true;
        this.editedItem=this.taskService.getIngredient(index);

        this.slForm.setValue({
          tId: this.editedItem.task_id,
          tTitle: this.editedItem.task_title,
          pIc: this.editedItem.assigned
          
        })
      }
    );
  }
 
  
  onSubmit(form: NgForm) {
    const value= form.value;
    const newIngredient = new IngredientTask(value.tId,value.tTitle,value.pIc);
    if (this.editMode){
      this.taskService.updateIngredient(this.editedItemIndex,newIngredient);
    } else {
      this.taskService.addIngredient(newIngredient);
    }   
    this.editMode=false;
    form.reset();
  }
  onClear()
  {
    this.slForm.reset();
    this.editMode=false;
  }
  onDelete(){
    this.taskService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  
  ngOnDestroy(){

    this.subscription.unsubscribe();
  }



}
