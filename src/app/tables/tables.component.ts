import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  boards={"name1": "Backlog","name2":"Todo","name3":"In Progress","name4":"Done"};
  constructor() { }

  ngOnInit() {
  }

}
