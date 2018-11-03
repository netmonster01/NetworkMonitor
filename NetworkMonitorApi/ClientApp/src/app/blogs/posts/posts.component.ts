import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services';
import { Post } from '../../models';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private blog: BlogService ) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.blog.getPosts().subscribe((posts: Post[]) => this.processPosts(posts));
  }

  processPosts(posts: Post[]): void {
    this.posts = posts;
  }
}
