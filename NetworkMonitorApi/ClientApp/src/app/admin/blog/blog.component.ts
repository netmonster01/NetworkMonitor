import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services';
import { Blog, Post } from '../../models';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  constructor(private blog: BlogService) { }

  posts: Post[] = [];

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.blog.getPosts().subscribe((posts: Post[]) => this.processPosts(posts));
  }

  processPosts(posts: Post[]): void {
    this.posts = posts;
  }

  openDialog() {

  }

}
