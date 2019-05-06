
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from '../task';
import { IngredientTask } from '../Task.model';
import { Subscription } from 'rxjs/Subscription';
import { TaskService } from './tasks.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Ingredient } from '../Box.model';
import { TableService } from '../tables/table.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {
  ingredients:IngredientTask[] ;
  ingredient: Ingredient[] ;
  private subscription: Subscription;
  //task:Task[];
  selectedTask: Task;
  constructor(private tasksService:TaskService,
              private router: Router,
              private route:ActivatedRoute,
              private slService:TableService) { }
    

               IngredientTask=[
                new IngredientTask(1, 'Create a Kanaban Board tool','https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg'),
                new IngredientTask(2, 'Create a Kanaban Board tool','https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg'),
                new IngredientTask(3, 'Create a Kanaban Board tool','https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg'),
                new IngredientTask(4, 'Create a Kanaban Board tool','https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg'),
              ];

              IngredientTask1=[];

              

  ngOnInit() {
    //this.getTasks();
    this.ingredients = this.tasksService.getIngredients();
    this.subscription = this.tasksService.IngredientChanged
      .subscribe(
        (ingredients: IngredientTask[]) => {
          this.ingredients = ingredients;
        }
      );

      this.ingredient = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged.subscribe(
        (ingredient: Ingredient[]) => {
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
    this.tasksService.startedEditing.next(index);

  }

  onEditItem1(index:number){
    this.router.navigate(['editBoard'], {relativeTo: this.route});
    this.slService.startedEditing.next(index);
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
