import { Component, OnInit } from '@angular/core';
import { BlogService, AuthService, ANONYMOUS_USER, VoteService } from '../../../services';
import { Post, Vote, User } from '../../../models';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-blog-widget',
  templateUrl: './blog-widget.component.html',
  styleUrls: ['./blog-widget.component.css']
})

export class BlogWidgetComponent implements OnInit {

  user: User = ANONYMOUS_USER;

  post: Post;
  myVote: Vote;
  voted = false;
  isLoggedIn = false;
  voteDirection = 0;

  constructor(private blog: BlogService, private auth: AuthService, private voter: VoteService) { }

  ngOnInit() {

    this.post = new Post();
    this.post.comments = [];

    this.myVote = {
      postId:  0,
      id: 0,
      userId: this.user.id,
      userVote: 0
    };//new Vote();
    this.myVote.userVote = -1;
    this.activate();
  }

  activate() {

    this.blog.getLatestPost().subscribe((post: Post) => this.processData(post));

  }

  processvVoteData(vote: Vote): void {

    console.log(vote);
    this.voteDirection = vote.userVote
    this.myVote = vote;
  }

  processUserData(data: User): void {
    this.user = data;
    if (this.user && this.user.id != null) {
      this.myVote.userId = data.id;
    }
    
    
    
  }

  processData(post: Post): void {

    this.isLoggedIn = this.auth.isUserLoggedIn();

    this.auth.user$.subscribe(data => this.processUserData(data));

    if (this.isLoggedIn) {

      this.user = this.auth.loggedInUser();
      this.myVote.userId = this.user.id;
      this.myVote.postId = post.postId;
      this.voter.getVote(this.myVote).subscribe((vote: Vote) => this.processvVoteData(vote));
    }

    console.log(post);

    this.post = post;
  }

  upVote() {
    
    // need to check currect vote
    //never voted
    if (this.myVote.userVote >= 0) {
      if (this.post.likes >= 0) {
        this.post.likes++;
      }
      this.myVote.userVote = 1;
    }

    // voted disliked
    if (this.myVote.userVote == -1) {
      this.post.likes++;
      if (this.post.disLikes >= 0) {
        this.post.disLikes--;
      }
      this.myVote.userVote = 1;
    }
    
    // update database
    this.addVote();
  }

  addVote(): any {
    this.voter.addVote(this.myVote).subscribe((vote: Vote) => this.processvVoteData(vote));
  }

  downVote() {
    // need to check currect vote
    //never voted
    if (this.myVote.userVote == 0) {
      this.post.disLikes++;
      this.myVote.userVote = -1;
    }

    // voted liked
    if (this.myVote.userVote == 1) {
      if (this.post.likes >= 0) {
        this.post.likes--;
      }
      this.post.disLikes++;
      this.myVote.userVote = -1;
    }

    // update database
    this.addVote();
  }
}
