
import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';
import { BoxTask } from '../../BoxTask.model';
import { Router, ActivatedRoute } from '@angular/router';
import { TableService } from 'src/app/services/table.service';
import { Box } from 'src/app/Box.model';

@Component({
  selector: 'app-tasks-detail',
  templateUrl: './tasks-detail.component.html',
  styleUrls: ['./tasks-detail.component.css']
})
export class TasksDetailComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm:NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex:number;
  editedItem:Box;
  editedTask: BoxTask;
  ingredients:BoxTask[] ;
  ingredient: Box[] ;


  constructor(private boxService: TableService,
    private router:Router,
    private route:ActivatedRoute) { }

    ngOnInit() {
      this.ingredient = this.boxService.getIngredients();
      this.subscription = this.boxService.ingredientsChanged.subscribe(
          (ingredient: Box[]) => {
            this.ingredient = ingredient;
          }
        );
      this.subscription= this.boxService.startedEditing.subscribe(
        (index: number) => {
          this.editedItemIndex=index;
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
      const newTask = new BoxTask(value.tId,value.tTitle,value.pIc,[]);
      if (this.editMode){
        this.boxService.updateTask(this.editedItemIndex,newTask);
      } else  {
        this.boxService.addTask(newTask);
      }  
      this.editMode=false;
      form.reset();
    }
    onClear()
    {
      this.slForm.reset();
      this.editMode=false;
    }
    onEditItem(index:number){
      this.router.navigate(['editTask'], {relativeTo: this.route});
      this.boxService.startedEditing.next(index);
  
    }
    onDelete(){
      this.boxService.deleteTask(this.editedItemIndex);
      this.onClear();
    }
    onCancel() {
      this.router.navigate(['../'], {relativeTo: this.route});
    }
    ngOnDestroy(){
  
      this.subscription.unsubscribe();
    }
  
  

}
