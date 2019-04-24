import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  tasks={"task_id":1, "task_title":"Create a Kanaban Board tool", "assigned":"Umair", "comments":{"comment_id":"12",
  "comment_text":"Please use company's color scheme. Use different color codes for board columns","comment_author":"Ehsaan"}};
  constructor() { }

  ngOnInit() {
  }

}
