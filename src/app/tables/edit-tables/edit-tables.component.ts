import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Box } from 'src/app/models/Box.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-tables',
  templateUrl: './edit-tables.component.html',
  styleUrls: ['./edit-tables.component.css']
})
export class EditTablesComponent implements OnInit,OnDestroy {
  @ViewChild('f') boardForm:NgForm;
  subscription: Subscription;
  editMode = false;
  editedBoardIndex:number;
  editedBoard:Box;
  constructor(private boxService: TaskService,
              private router:Router,
              private route:ActivatedRoute) { }

  
  ngOnInit() {
    this.subscription= this.boxService.startedEditing.subscribe(
      (index: number) => {
        this.editedBoardIndex=index;
        this.editMode = true;
        this.editedBoard=this.boxService.getBox(index);

        this.boardForm.setValue({
          name: this.editedBoard.name,
          boardID: this.editedBoard.board_id,
          taskId:this.editedBoard.task,
        })
      }
    );
  }
  onSubmit(form: NgForm) {
    const value= form.value;
    const newBox = new Box(value.boardID ,value.name, []);
    if (this.editMode){
      this.boxService.updateBox(this.editedBoardIndex,newBox);
    } else {
      this.boxService.addBox(newBox);
    }   
    this.editMode=false;
    form.reset();
  }
  onClear()
  {
    this.boardForm.reset();
    this.editMode=false;
  }
  onDelete(){
    this.boxService.deleteBox(this.editedBoardIndex);
    this.onClear();
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  ngOnDestroy(){

    this.subscription.unsubscribe();
  }


}
