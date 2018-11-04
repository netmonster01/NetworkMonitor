import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services';
import { Post } from '../../../models';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-blog-widget',
  templateUrl: './blog-widget.component.html',
  styleUrls: ['./blog-widget.component.css']
})

export class BlogWidgetComponent implements OnInit {

  post: Post;
  constructor(private blog: BlogService) { }

  ngOnInit() {

    this.post = new Post();
    this.post.comments = []
    this.activate();
  }

  activate() {
    this.blog.getLatestPost().subscribe((post: Post) => this.processData(post));
  }

  processData(post: Post): void {
   
    console.log(post);
    this.post = post;
  }
}
