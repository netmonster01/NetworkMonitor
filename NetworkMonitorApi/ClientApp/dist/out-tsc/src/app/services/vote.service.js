var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export var VOTE_PLACEHOLDER = {
    postId: 0,
    userVote: 0,
    userId: null,
    id: 0
};
var VoteService = /** @class */ (function () {
    function VoteService(_http) {
        this._http = _http;
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
        this.options = {
            headers: this.headers
        };
    }
    VoteService.prototype.getVote = function (vote) {
        return this._http.post('/api/Votes/MyVote', vote, this.options)
            .catch(this.handleError);
    };
    VoteService.prototype.addVote = function (vote) {
        return this._http.post('/api/Votes', vote, this.options)
            .catch(this.handleError);
    };
    VoteService.prototype.getAllVotes = function () {
        return this._http.get('/api/Votes', this.options)
            .catch(this.handleError);
    };
    VoteService.prototype.handleError = function (handleError) {
        console.log(handleError);
    };
    VoteService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], VoteService);
    return VoteService;
}());
export { VoteService };
//# sourceMappingURL=vote.service.js.map