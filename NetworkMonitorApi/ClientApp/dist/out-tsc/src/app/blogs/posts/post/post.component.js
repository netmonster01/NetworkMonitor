var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Post, User, Vote, Comment } from '../../../models';
import { BlogService, AuthService, ANONYMOUS_USER, VoteService } from '../../../services';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NewCommentDailogComponent } from '../../../dialogs';
var PostComponent = /** @class */ (function () {
    function PostComponent(blog, auth, voter, dialog) {
        this.blog = blog;
        this.auth = auth;
        this.voter = voter;
        this.dialog = dialog;
        this.currentPost = new Post();
        this.voted = false;
        this.isLoggedIn = false;
        this.showComments = false;
        this.voteDirection = 0;
        this.myVote = new Vote();
        this.user = ANONYMOUS_USER;
    }
    Object.defineProperty(PostComponent.prototype, "post", {
        set: function (post) {
            var _this = this;
            this.isLoggedIn = this.auth.isUserLoggedIn();
            if (this.isLoggedIn && post != null && post.postId != null) {
                this.myVote.postId = post.postId;
                if (this.user.id == null) {
                    this.user = this.auth.loggedInUser();
                }
                this.myVote.userId = this.user.id;
                //this.myVote.us
                this.voter.getVote(this.myVote).subscribe(function (vote) { return _this.processvVoteData(vote); });
            }
            this.currentPost = post;
        },
        enumerable: true,
        configurable: true
    });
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent.prototype.processUserData = function (data) {
        this.myVote.userId = data.id;
        if (this.isLoggedIn) {
            this.user = this.auth.loggedInUser();
            this.myVote.userId = this.user.id;
            this.myVote.postId = this.currentPost.postId;
            //this.voter.getVote(this.myVote).subscribe((vote: Vote) => this.processvVoteData(vote));
        }
    };
    PostComponent.prototype.upVote = function () {
        // need to check currect vote
        //never voted
        if (this.myVote.userVote >= 0) {
            if (this.currentPost.likes >= 0) {
                this.currentPost.likes++;
            }
            this.myVote.userVote = 1;
        }
        // voted disliked
        if (this.myVote.userVote == -1) {
            this.currentPost.likes++;
            if (this.currentPost.disLikes >= 0) {
                this.currentPost.disLikes--;
            }
            this.myVote.userVote = 1;
        }
        // update database
        this.addVote();
    };
    PostComponent.prototype.addVote = function () {
        var _this = this;
        this.voter.addVote(this.myVote).subscribe(function (vote) { return _this.processvVoteData(vote); });
    };
    PostComponent.prototype.processvVoteData = function (vote) {
        console.log(vote);
        this.voteDirection = vote.userVote;
        this.myVote = vote;
    };
    PostComponent.prototype.downVote = function () {
        // need to check currect vote
        //never voted
        if (this.myVote.userVote == 0) {
            this.currentPost.disLikes++;
            this.myVote.userVote = -1;
        }
        // voted liked
        if (this.myVote.userVote == 1) {
            if (this.currentPost.likes >= 0) {
                this.currentPost.likes--;
            }
            this.currentPost.disLikes++;
            this.myVote.userVote = -1;
        }
        // update database
        this.addVote();
    };
    PostComponent.prototype.openNewCommentDialog = function () {
        var _this = this;
        var dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            hasBackdrop: false,
            width: '500px'
        };
        var dialogRef = this.dialog.open(NewCommentDailogComponent, { width: '500px', height: '500px', hasBackdrop: false, data: this.currentPost });
        dialogRef.afterClosed().subscribe(function (data) { return _this.updateComments(data); });
    };
    PostComponent.prototype.updateComments = function (data) {
        if (data != null) {
            if (data instanceof Comment) {
                this.post.comments.push(data);
            }
        }
    };
    PostComponent.prototype.viewComments = function () {
        this.showComments = !this.showComments;
    };
    PostComponent.prototype.deletPost = function (postId) {
    };
    __decorate([
        Input(),
        __metadata("design:type", User)
    ], PostComponent.prototype, "user", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Post),
        __metadata("design:paramtypes", [Post])
    ], PostComponent.prototype, "post", null);
    PostComponent = __decorate([
        Component({
            selector: 'app-post',
            templateUrl: './post.component.html',
            styleUrls: ['./post.component.css']
        }),
        __metadata("design:paramtypes", [BlogService, AuthService, VoteService, MatDialog])
    ], PostComponent);
    return PostComponent;
}());
export { PostComponent };
//# sourceMappingURL=post.component.js.map