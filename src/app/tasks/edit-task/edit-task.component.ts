
import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NgForm, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Box } from 'src/app/models/Box.model';
import { BoxTaskComment } from 'src/app/models/BoxTaskComment.module';
import { BoxTask } from 'src/app/models/BoxTask.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})


export class EditTaskComponent implements OnInit, OnDestroy{
  ingredient: Box[] ;
  ingredients:BoxTask[] ;
  subscription: Subscription;
  editMode = false;
  editedItemIndex:number;
  editedItem:Box;
  editedTask: BoxTask;
  editedComment: BoxTaskComment;

  index:number;
  taskForm: FormGroup;
  editedTaskComment:number;
  constructor(private boxService: TaskService,
              private router:Router,
              private route:ActivatedRoute) { }
  ngOnInit() {
    this.ingredient = this.boxService.getBoxes();
    this.subscription = this.boxService.BoxesChanged.subscribe(
        (ingredient: Box[]) => {
          this.ingredient = ingredient;
        }
      );
    this.subscription= this.boxService.startedEditing.subscribe(
      (index1: number) => {
        this.editedItemIndex=index1;
        this.editMode = this.boxService.getTask(index1) !=null;
        this.editedTask=this.boxService.getTask(index1);
        console.log(this.boxService.getTask(index1));
        this.index=index1;
        this.initForm();
       
      }
    );
  }

  private initForm(){
    let taskId=1;
    let taskTitle='';
    let imageUrl='';
    let comments=new FormArray([]);
    
    if(this.editMode){
      const task=this.boxService.getTask(this.index);
      taskId=task.task_id;
      taskTitle=task.task_title;
      imageUrl=task.assigned;
      if (task['comment'])
      {
        for (let comment_ of task.comment )
        {
          comments.push(
            new FormGroup({
              'comment_id': new FormControl(comment_.comment_id, Validators.required),
              'comment': new FormControl(comment_.comment,Validators.required),
              'comment_auther': new FormControl(comment_.comment_auther,Validators.required),
            })
          );
          
        }
      }
      
        
    }

    this.taskForm= new FormGroup({
      'task_id':  new FormControl(taskId, Validators.required),
      'task_title': new FormControl(taskTitle, Validators.required),
      'assigned':new FormControl(imageUrl, Validators.required),
      'comment': comments
    });
  }
  
  onSubmit() {

    console.log(this.taskForm.value);
    if (this.editMode){
      this.boxService.updateTask(this.editedItemIndex,this.taskForm.value);
    } else  {
      this.boxService.addTask(this.taskForm.value);
    }  
    this.onCancel();
  }
  onAddIngredient() {
    (<FormArray>this.taskForm.get('comment')).push(
      new FormGroup({
        'comment_id': new FormControl(null, Validators.required),
        'comment': new FormControl(null, Validators.required),
        'comment_auther': new FormControl(null, Validators.required),
      })
    );
  }
  onClear()
  {
    this.editMode=false;
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
  getControls() {
    return (<FormArray>this.taskForm.get('comment')).controls;
  }


}

// Reactive approach
// import {
//   Component,
//   OnInit,
//   ElementRef,
//   ViewChild,
//   OnDestroy
// } from '@angular/core';
// import { Subscription } from 'rxjs/Subscription';
// import { NgForm } from '@angular/forms';
// import { BoxTask } from '../../BoxTask.model';
// import { Router, ActivatedRoute } from '@angular/router';
// import { TableService } from 'src/app/services/table.service';
// import { Box } from 'src/app/Box.model';
// import { BoxTaskComment } from 'src/app/BoxTaskComment.module';

// @Component({
//   selector: 'app-edit-task',
//   templateUrl: './edit-task.component.html',
//   styleUrls: ['./edit-task.component.css']
// })


// export class EditTaskComponent implements OnInit, OnDestroy{
//   @ViewChild('f') teForm:NgForm;
//   subscription: Subscription;
//   editMode = false;
//   editedItemIndex:number;
//   editedTask: BoxTask;

//   constructor(private boxService: TableService,
//               private router:Router,
//               private route:ActivatedRoute) { }
//   ngOnInit() {
//     this.subscription= this.boxService.startedEditing.subscribe(
//       (index: number) => {
//         this.editedItemIndex=index;
//         this.editMode = true;
//         this.editedTask=this.boxService.getTask(index);
//       console.log(index);
//         this.teForm.setValue({
//           tId: this.editedTask.task_id,
//           tTitle: this.editedTask.task_title,
//           pIc: this.editedTask.assigned,
//          })
//       }
//     );
//   }
//   onSubmit(form: NgForm) {
//     const value= form.value;
//     const newTask = new BoxTask(value.tId,value.tTitle,value.pIc,[]);
//     if (this.editMode){
//       this.boxService.updateTask(this.editedItemIndex,newTask);
//     } else  {
//       this.boxService.addTask(newTask);
//     }  
//     this.editMode=false;
//     form.reset();
//   }
//   onClear()
//   {
//     this.teForm.reset();
//     this.editMode=false;
//   }
//   onDelete(){
//     this.boxService.deleteTask(this.editedItemIndex);
//     this.onClear();
//   }
//   onCancel() {
//     this.router.navigate(['../'], {relativeTo: this.route});
    
//   }
//   ngOnDestroy(){

//     this.subscription.unsubscribe();
//   }
// }
