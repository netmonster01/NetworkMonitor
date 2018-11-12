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
import { LoggerService } from './logger.service';
var ProjectService = /** @class */ (function () {
    function ProjectService(_http, loggerService) {
        this._http = _http;
        this.loggerService = loggerService;
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    }
    ProjectService.prototype.getProjects = function () {
        return this._http.get('/api/Projects')
            .catch(this.handleError);
    };
    ProjectService.prototype.createPost = function (project) {
        var options = {
            headers: this.headers
        };
        return this._http.post('/api/Projects', project, options).catch(this.handleError);
    };
    ProjectService.prototype.handleError = function (handleError) {
        console.log(handleError);
    };
    ProjectService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient, LoggerService])
    ], ProjectService);
    return ProjectService;
}());
export { ProjectService };
//# sourceMappingURL=project.service.js.map