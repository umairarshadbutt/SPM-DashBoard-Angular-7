
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from '../task';
import { BoxTask } from '../Task.model';
import { Subscription } from 'rxjs/Subscription';
import { TaskService } from '../services/tasks.service';
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
  private subscription: Subscription;
  //task:Task[];
  selectedTask: Task;
  constructor(private tasksService:TaskService,
              private router: Router,
              private route:ActivatedRoute,
              private boxService:TableService) { }
    

              

  ngOnInit() {
    //this.getTasks();
    

      this.ingredient = this.boxService.getIngredients();
    this.subscription = this.boxService.ingredientsChanged.subscribe(
        (ingredient: Box[]) => {
          this.ingredient = ingredient;
        }
      );
  }
  onSelect(task:Task): void{
    this.selectedTask=task;
  }
  // getTasks():void{
  //   this.tasksService.getTask().subscribe(task=> this.task=task);
  // }

  onEditItem(index:number){
    this.router.navigate(['editTask'], {relativeTo: this.route});
    this.boxService.startedEditing.next(index);

  }

  onEditItem1(index:number){
    this.router.navigate(['editBoard'], {relativeTo: this.route});
    this.boxService.startedEditing.next(index);
  }
  onNewTask() {
    this.router.navigate(['newTask'], {relativeTo: this.route});
  }
  onNewBoard() {
    this.router.navigate(['newBoard'], {relativeTo: this.route});
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
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
