import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Task, Board } from './task';
import { of } from 'rxjs';
import { taskObject, boards } from './mock_task';


@Injectable({
    providedIn:'root',
})
export class TaskService{
    constructor(){}
    getTask():Observable<Task[]>{
        return of(taskObject);

    }
    getBoard():Observable<Board[]>{
        return of(boards);
    }

}