import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Blog, Post, BlogImage } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private _http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

  blog: Blog = {
    id: 0,
    title: null,
    url: null,
    posts: [],
    author: null,
    userId: null
  }

  getBlogs() {

    return this._http.get<Post[]>('/api/Blogs')
      .catch(this.handleError);
  }

  getPosts() {

    return this._http.get<Post[]>('/api/Blogs/Posts')
      .catch(this.handleError);
  }

  handleError(handleError: any): any {
    console.log(handleError);
  }

  uploadIamge(blogFile: FormData) {

    let options = {
      headers: this.headers
    };

    this._http.post('/api/FileUpload', blogFile).subscribe(result => { console.log(result) });
  }



}
