import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { TableService } from '../table.service';
import { Ingredient } from 'src/app/Box.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { IngredientTask } from 'src/app/ingredientTask.model';

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
  editedItem:Ingredient;
  constructor(private taskService: TableService,
              private router:Router,
              private route:ActivatedRoute) { }

  
  ngOnInit() {
    this.subscription= this.taskService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex=index;
        this.editMode = true;
        this.editedItem=this.taskService.getIngredient(index);

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
    const newIngredient = new Ingredient(value.boardID ,value.name, []);
    if (this.editMode){
      this.taskService.updateIngredient(this.editedItemIndex,newIngredient);
    } else {
      this.taskService.addIngredient(newIngredient);
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
    this.taskService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  ngOnDestroy(){

    this.subscription.unsubscribe();
  }


}
