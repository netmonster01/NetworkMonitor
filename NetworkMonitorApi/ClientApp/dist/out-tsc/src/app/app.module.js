var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//import { UiModule } from './ui/ui.module';
import { StatsComponent } from './stats/stats.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SignUpComponent, SignInComponent } from './login';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile';
import { HeaderComponent, FooterComponent } from './shared/layout';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule, MatSortModule, MatTableModule, MatProgressSpinnerModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogsComponent, PostsComponent, PostComponent } from './blogs';
import { AuthService, BlogService, StatsService, UserService, LoggerService, DashboardService, VoteService } from './services';
import { SafePipe, FilterPipe } from './pipes';
import { BlogComponent, ImagesComponent, AdminComponent, RolesComponent, UsersComponent } from './admin';
import { AuthGuard, RoleGuard } from "./guards";
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NewUserDialogComponent, NewBlogDialogComponent, NewRoleDialogComponent, ErrorDialogComponent, EditPostDialogComponent, NewCommentDailogComponent } from './dialogs';
import { MatDialogModule } from "@angular/material";
import { HighlightModule } from 'ngx-highlightjs';
import { NoRolesComponent } from './responses/no-roles/no-roles.component';
import { DashboardComponent, BlogWidgetComponent } from './dashboard';
import { NewCommentDirective } from './directives/new-comment.directive';
import { CommonComponent } from './dialogs/common/common.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';
import { LogsComponent } from './admin/logs/logs.component';
import { LogComponent } from './admin/logs/log/log.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                StatsComponent,
                LoginComponent,
                SignUpComponent,
                AdminComponent,
                RolesComponent,
                UsersComponent,
                SignInComponent,
                HomeComponent,
                PageNotFoundComponent,
                ProfileComponent,
                HeaderComponent,
                FooterComponent,
                BlogsComponent,
                PostsComponent,
                DashboardComponent,
                SafePipe,
                BlogComponent,
                ImagesComponent,
                ForbiddenComponent,
                NewUserDialogComponent,
                NewBlogDialogComponent,
                NewRoleDialogComponent,
                ErrorDialogComponent,
                EditPostDialogComponent,
                NoRolesComponent,
                BlogWidgetComponent,
                NewCommentDailogComponent,
                NewCommentDirective,
                PostComponent,
                CommonComponent,
                ProjectsComponent,
                ProjectComponent,
                LogsComponent,
                LogComponent,
                FilterPipe,
            ],
            imports: [
                BrowserModule,
                //UiModule,
                HttpClientModule,
                FormsModule,
                AppRoutingModule,
                ReactiveFormsModule,
                MatInputModule,
                MatSelectModule,
                MatButtonModule,
                MatChipsModule,
                BrowserAnimationsModule,
                MatDialogModule,
                MatProgressSpinnerModule,
                MatTableModule,
                MatPaginatorModule,
                MatSortModule,
                HighlightModule.forRoot({ theme: 'agate' })
            ],
            providers: [AuthService, UserService, StatsService, BlogService, AuthGuard, RoleGuard, LoggerService, DashboardService, VoteService],
            bootstrap: [AppComponent],
            entryComponents: [NewUserDialogComponent, NewRoleDialogComponent, NewBlogDialogComponent, ErrorDialogComponent, EditPostDialogComponent, NewCommentDailogComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map