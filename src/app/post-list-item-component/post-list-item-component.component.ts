import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() title: string;
  @Input()  content: string;
  @Input()  loveIts = 0 ;
  @Input()  created_at: Date;
  constructor() { }
  onLike() {
    this.loveIts ++;
    console.log(this.loveIts);
  }
  onUnLike() {
    this.loveIts --;
    console.log(this.loveIts);
  }
  ngOnInit() {
  }

}
