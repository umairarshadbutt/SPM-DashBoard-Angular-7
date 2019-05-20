import { boards } from './../mock_task';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Board, Task } from '../task';
import { Box } from '../models/Box.model';
import { TaskService } from '../services/task.service';
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
  Boxs: Box[] ;
  private subscription: Subscription;
  constructor(private tableService: TaskService) { }

  ngOnInit() {
    this.Boxs = this.tableService.getBoxes();
    this.subscription = this.tableService.BoxesChanged
      .subscribe(
        (ingredients: Box[]) => {
          this.Boxs = ingredients;
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
