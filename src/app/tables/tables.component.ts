import { boards } from './../mock_task';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Board, Task } from '../task';
import { TaskService } from '../tasks.service';
import { Ingredient } from '../Box.model';
import { TableService } from './table.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent  implements OnInit, OnDestroy{

 // boards={"name1": "Backlog","name2":"Todo","name3":"In Progress","name4":"Done"};

  // board_:Board[];
  // selectedTask: Task;
  // constructor(private tasksService:TaskService) { }

  //this is for getting board from json
  // ngOnInit() {
  //   this.getBoards();
  // }
  // onSelect(board_:Task): void{
  //   this.selectedTask=board_;
  // }
  // getBoards():void{
  //   this.tasksService.getTask().subscribe(task=> this.board_=boards);
  // }
  ingredients: Ingredient[] ;
  private subscription: Subscription;
  constructor(private tableService: TableService) { }

  ngOnInit() {
    this.ingredients = this.tableService.getIngredients();
    this.subscription = this.tableService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }
  onEditItem(index:number){
    this.tableService.startedEditing.next(index);


  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
