import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  contentGeneral: any;
  title = 'Task Board';
  constructor(
    private router:Router,
    private route:ActivatedRoute) { }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
    
  }
  ngOnInit(){
    
  }
}
