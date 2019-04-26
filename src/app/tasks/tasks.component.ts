import { TaskService } from './../tasks.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../task';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  task:Task[];
  selectedTask: Task;
  constructor(private tasksService:TaskService) { }


  ngOnInit() {
    this.getTasks();
  }
  onSelect(task:Task): void{
    this.selectedTask=task;
  }
  getTasks():void{
    this.tasksService.getTask().subscribe(task=> this.task=task);
  }

}
