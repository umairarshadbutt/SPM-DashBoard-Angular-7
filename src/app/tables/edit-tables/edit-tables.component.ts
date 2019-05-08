import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { TableService } from '../../services/table.service';
import { Box } from 'src/app/Box.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { BoxTask } from 'src/app/BoxTask.model';
@Component({
  selector: 'app-edit-tables',
  templateUrl: './edit-tables.component.html',
  styleUrls: ['./edit-tables.component.css']
})
export class EditTablesComponent implements OnInit,OnDestroy {
  @ViewChild('f') slForm:NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex:number;
  editedItem:Box;
  constructor(private boxService: TableService,
              private router:Router,
              private route:ActivatedRoute) { }

  
  ngOnInit() {
    this.subscription= this.boxService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex=index;
        this.editMode = true;
        this.editedItem=this.boxService.getIngredient(index);

        this.slForm.setValue({
          name: this.editedItem.name,
          boardID: this.editedItem.board_id,
          taskId:this.editedItem.task,
        })
      }
    );
  }
  onSubmit(form: NgForm) {
    const value= form.value;
    const newIngredient = new Box(value.boardID ,value.name, []);
    if (this.editMode){
      this.boxService.updateIngredient(this.editedItemIndex,newIngredient);
    } else {
      this.boxService.addIngredient(newIngredient);
    }   
    this.editMode=false;
    form.reset();
  }
  onClear()
  {
    this.slForm.reset();
    this.editMode=false;
  }
  onDelete(){
    this.boxService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  ngOnDestroy(){

    this.subscription.unsubscribe();
  }


}
