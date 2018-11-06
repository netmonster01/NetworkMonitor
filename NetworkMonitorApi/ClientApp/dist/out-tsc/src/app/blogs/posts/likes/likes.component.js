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
import { Post, User, Vote } from '../../../models';
import { BlogService, AuthService, ANONYMOUS_USER, VoteService } from '../../../services';
var LikesComponent = /** @class */ (function () {
    function LikesComponent(blog, auth, voter) {
        this.blog = blog;
        this.auth = auth;
        this.voter = voter;
        //user: User = ANONYMOUS_USER;
        this.currentPost = new Post();
        this.voted = false;
        this.isLoggedIn = false;
        this.showComments = false;
        this.voteDirection = 0;
        this.myVote = new Vote();
        this.user = ANONYMOUS_USER;
    }
    Object.defineProperty(LikesComponent.prototype, "post", {
        set: function (post) {
            var _this = this;
            this.isLoggedIn = this.auth.isUserLoggedIn();
            if (this.isLoggedIn && post != null && post.postId != null) {
                this.myVote.postId = post.postId;
                this.myVote.userId = this.user.id;
                this.currentPost = post;
                //this.myVote.us
                this.voter.getVote(this.myVote).subscribe(function (vote) { return _this.processvVoteData(vote); });
            }
        },
        enumerable: true,
        configurable: true
    });
    LikesComponent.prototype.ngOnInit = function () {
        //this.myVote = 
        //this.myVote.userId = this.user.id;
        //this.myVote.postId = this.post.postId;
        //this.auth.user$.subscribe(data => this.processUserData(data));
    };
    LikesComponent.prototype.processUserData = function (data) {
        this.myVote.userId = data.id;
        if (this.isLoggedIn) {
            this.user = this.auth.loggedInUser();
            this.myVote.userId = this.user.id;
            this.myVote.postId = this.currentPost.postId;
            //this.voter.getVote(this.myVote).subscribe((vote: Vote) => this.processvVoteData(vote));
        }
    };
    LikesComponent.prototype.upVote = function () {
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
    LikesComponent.prototype.addVote = function () {
        var _this = this;
        this.voter.addVote(this.myVote).subscribe(function (vote) { return _this.processvVoteData(vote); });
    };
    LikesComponent.prototype.processvVoteData = function (vote) {
        console.log(vote);
        this.voteDirection = vote.userVote;
        this.myVote = vote;
    };
    LikesComponent.prototype.downVote = function () {
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
    __decorate([
        Input(),
        __metadata("design:type", User)
    ], LikesComponent.prototype, "user", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Post),
        __metadata("design:paramtypes", [Post])
    ], LikesComponent.prototype, "post", null);
    LikesComponent = __decorate([
        Component({
            selector: 'app-likes',
            templateUrl: './likes.component.html',
            styleUrls: ['./likes.component.css']
        }),
        __metadata("design:paramtypes", [BlogService, AuthService, VoteService])
    ], LikesComponent);
    return LikesComponent;
}());
export { LikesComponent };
//# sourceMappingURL=likes.component.js.map