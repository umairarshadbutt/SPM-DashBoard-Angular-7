import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TableService } from '../table.service';
import { Ingredient } from 'src/app/ingredient.model';

@Component({
  selector: 'app-edit-tables',
  templateUrl: './edit-tables.component.html',
  styleUrls: ['./edit-tables.component.css']
})
export class EditTablesComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef:ElementRef;
  constructor(private taskService: TableService) { }

  ngOnInit() {
  }
  onAddItem(){
    const ingName= this.nameInputRef.nativeElement.value;
    const newIngredient =new Ingredient(ingName);
    this.taskService.addIngredient(newIngredient);
  }


}
