
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from '../task';
import { IngredientTask } from '../ingredientTask.model';
import { Subscription } from 'rxjs/Subscription';
import { TaskService } from './tasks.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {
  ingredients:IngredientTask[] ;
  private subscription: Subscription;
  //task:Task[];
  selectedTask: Task;
  constructor(private tasksService:TaskService,
              private router: Router,
              private route:ActivatedRoute) { }


  ngOnInit() {
    //this.getTasks();
    this.ingredients = this.tasksService.getIngredients();
    this.subscription = this.tasksService.IngredientChanged
      .subscribe(
        (ingredients: IngredientTask[]) => {
          this.ingredients = ingredients;
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
    this.tasksService.startedEditing.next(index);


  }
  onNewRecipe() {
    this.router.navigate(['newTask'], {relativeTo: this.route});
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
