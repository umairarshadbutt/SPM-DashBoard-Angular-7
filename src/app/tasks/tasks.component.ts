//import { Box } from 'src/app/Box.model';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from '../task';
import { BoxTask } from '../BoxTask.model';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { Box } from '../Box.model';
import { TableService } from '../services/table.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {
  ingredients:BoxTask[] ;
  ingredient: Box[] ;
  editMode= false;
  private subscription: Subscription;
  //task:Task[];
  selectedTask: Box;
  constructor(
              private router: Router,
              private route:ActivatedRoute,
              private boxService:TableService) { }
    

              

  ngOnInit() {
    //this.getTasks();
    

      this.ingredient = this.boxService.getBoxes();
    this.subscription = this.boxService.BoxesChanged.subscribe(
        (ingredient: Box[]) => {
          this.ingredient = ingredient;
        }
      );
  }
  onSelect(task:Box): void{
    this.selectedTask=task;
    this.editMode = false;

  }
  // getTasks():void{
  //   this.tasksService.getTask().subscribe(task=> this.task=task);
  // }


  onEditItem(index:number){
    this.editMode = true;
    this.boxService.startedEditing.next(index);
    
    
  }

  onEditItem1(index:number){
    this.router.navigate(['editBoard'], {relativeTo: this.route});
    this.boxService.startedEditing.next(index);
  }
  onNewTask() {
    this.editMode=true;
  }
  onNewBoard() {
    this.router.navigate(['newBoard'], {relativeTo: this.route});
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
 
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
