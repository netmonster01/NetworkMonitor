var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { BlogService, AuthService, ANONYMOUS_USER, VoteService } from '../../../services';
import { Post } from '../../../models';
var BlogWidgetComponent = /** @class */ (function () {
    function BlogWidgetComponent(blog, auth, voter) {
        this.blog = blog;
        this.auth = auth;
        this.voter = voter;
        this.user = ANONYMOUS_USER;
        this.voted = false;
        this.isLoggedIn = false;
    }
    BlogWidgetComponent.prototype.ngOnInit = function () {
        this.post = new Post();
        this.post.comments = [];
        this.myVote = {
            postId: 0,
            id: 0,
            userId: this.user.id,
            userVote: 0
        }; //new Vote();
        this.myVote.userVote = 0;
        this.activate();
    };
    BlogWidgetComponent.prototype.activate = function () {
        var _this = this;
        this.blog.getLatestPost().subscribe(function (post) { return _this.processData(post); });
    };
    BlogWidgetComponent.prototype.processvVoteData = function (vote) {
        console.log(vote);
        this.myVote = vote;
    };
    BlogWidgetComponent.prototype.processUserData = function (data) {
        this.user = data;
        if (this.user && this.user.id != null) {
            this.myVote.userId = data.id;
        }
    };
    BlogWidgetComponent.prototype.processData = function (post) {
        var _this = this;
        this.isLoggedIn = this.auth.isUserLoggedIn();
        this.auth.user$.subscribe(function (data) { return _this.processUserData(data); });
        if (this.isLoggedIn) {
            this.user = this.auth.loggedInUser();
            this.myVote.userId = this.user.id;
            this.myVote.postId = post.postId;
            this.voter.getVote(this.myVote).subscribe(function (vote) { return _this.processvVoteData(vote); });
        }
        console.log(post);
        this.post = post;
    };
    BlogWidgetComponent.prototype.upVote = function () {
        //this.myVote.userId = this.user.id;
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
    };
    BlogWidgetComponent.prototype.addVote = function () {
        var _this = this;
        this.voter.addVote(this.myVote).subscribe(function (vote) { return _this.processvVoteData(vote); });
    };
    BlogWidgetComponent.prototype.downVote = function () {
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
    };
    BlogWidgetComponent = __decorate([
        Component({
            selector: 'app-blog-widget',
            templateUrl: './blog-widget.component.html',
            styleUrls: ['./blog-widget.component.css']
        }),
        __metadata("design:paramtypes", [BlogService, AuthService, VoteService])
    ], BlogWidgetComponent);
    return BlogWidgetComponent;
}());
export { BlogWidgetComponent };
//# sourceMappingURL=blog-widget.component.js.map