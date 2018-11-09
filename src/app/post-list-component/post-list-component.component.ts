import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {
  posts = [
    {
      title: 'Mon premier post',
      content: 'text1',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon deuxieme post',
      content: 'text2',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon troisieme post',
      content: 'text3',
      loveIts: 0,
      created_at: new Date()
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
