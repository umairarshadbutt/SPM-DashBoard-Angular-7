
import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { TaskService } from '../../services/tasks.service';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';
import { BoxTask } from '../../Task.model';
import { IngredientComment} from '../../IngredientComment.model';
import { Router, ActivatedRoute } from '@angular/router';
import { TableService } from 'src/app/services/table.service';
import { Box } from 'src/app/Box.model';
import { Task } from 'src/app/task';

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
  editedItem:Box;
  editedTask: BoxTask;


  constructor(private boxService: TableService,
              private router:Router,
              private route:ActivatedRoute) { }
  ngOnInit() {
    this.subscription= this.boxService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex=index;
        this.editMode = true;
        this.editedTask=this.boxService.getTask(index);
       
      }
    );


    this.subscription= this.boxService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex=index;
        this.editMode = true;
        this.editedTask=this.boxService.getTask(index);
       
        this.slForm.setValue({
          
          tId: this.editedTask.task_id,
          tTitle: this.editedTask.task_title,
          pIc: this.editedTask.assigned
          
         })
      }
    );
  }
 
  
  onSubmit(form: NgForm) {
    const value= form.value;
    const newTask = new BoxTask(value.tId,value.tTitle,value.pIc);
     
    this.editMode=false;
    form.reset();
  }
  onClear()
  {
    this.slForm.reset();
    this.editMode=false;
  }
  onDelete(){
    this.boxService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  ngOnDestroy(){

    this.subscription.unsubscribe();
  }



}
