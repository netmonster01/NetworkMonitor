import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Blog, Post } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private _http: HttpClient) { }

  blog: Blog = {
    id: 0,
    title: null,
    url: null,
    posts: [],
    author: null,
    userId: null
  }

  getBlogs() {

    return this._http.get('/api/Blogs')
      .catch(this.handleError);
  }

  handleError(handleError: any): any {
    console.log(handleError);
  }


}
