import { TaskService } from './../tasks.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
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