import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services';
import { Blog } from '../models';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(private _blogService: BlogService) { }

  blog: Blog;

  ngOnInit() {
    this.activate();
  }
    activate(): void {
      this.getBlog();
  }

  getBlog() {
    this._blogService.getBlogs().subscribe((data: Blog) => this.popData(data));
  }

  popData(blog: Blog) {
    console.log(blog);
    this.blog =  blog;
  }

}
