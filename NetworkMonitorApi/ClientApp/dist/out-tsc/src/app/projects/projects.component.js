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
import { ProjectService } from '../services';
var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(projectService) {
        this.projectService = projectService;
        this.projects = [];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ProjectsComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects().subscribe(function (data) { return _this.processData(data); });
    };
    ProjectsComponent.prototype.processData = function (projects) {
        if (projects) {
            this.projects = projects;
            this.raspberryPi = this.projects[0];
            this.raspberryPi.fullThumbnailImageSrc = this.raspberryPi.thumbnailImageType + this.raspberryPi.thumbnailImage;
            this.angular = this.projects[1];
            this.angular.fullThumbnailImageSrc = this.angular.thumbnailImageType + this.angular.thumbnailImage;
        }
    };
    ProjectsComponent = __decorate([
        Component({
            selector: 'app-projects',
            templateUrl: './projects.component.html',
            styleUrls: ['./projects.component.css']
        }),
        __metadata("design:paramtypes", [ProjectService])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
export { ProjectsComponent };
//# sourceMappingURL=projects.component.js.map