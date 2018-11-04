import { Comment } from "@angular/compiler";

export class Post {
  postId: number;
  title: string;
  content: string;
  blogId: number;
  comments: Comment[]
}
