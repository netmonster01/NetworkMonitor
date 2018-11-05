import { Comment } from "./comment";

//export class Post {
//  postId: number;
//  title: string;
//  content: string;
//  blogId: number;
//  likes: number;
//  comments: Comment[];
//}

export class Post {
  public postId: number;
  public title: string;
  public content: string;
  public blogId: number;
  public userId: string;
  public author: string;
  public sateCreated: Date;
  public sateModified: Date;
  public likes: number;
  public disLikes: number;
  public comments: Comment[];
}
