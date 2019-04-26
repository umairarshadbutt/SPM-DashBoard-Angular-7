import { boards } from './../mock_task';
import { Component, OnInit } from '@angular/core';
import { Board, Task } from '../task';
import { TaskService } from '../tasks.service';
import { Ingredient } from '../ingredient.model';
import { TableService } from './table.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent  {

 // boards={"name1": "Backlog","name2":"Todo","name3":"In Progress","name4":"Done"};

  board_:Board[];
  selectedTask: Task;
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

  constructor(private slService: TableService) { }

  ngOnInit() {
    this.ingredients=this.slService.getIngredient();
    this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) =>{
        this.ingredients=this.ingredients;
      }
    )
  }
}







