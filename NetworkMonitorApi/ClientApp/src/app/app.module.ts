import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
//import { UiModule } from './ui/ui.module';
import { StatsComponent } from './stats/stats.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { AdminComponent } from './admin/admin.component';
import { RolesComponent } from './admin/roles/roles.component';
import { UsersComponent } from './admin/users/users.component';
import { SignInComponent } from './login';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile';
import { HeaderComponent, FooterComponent } from './shared/layout';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogsComponent } from './blogs/blogs.component';
import { PostsComponent } from './blogs/posts/posts.component';
import { CommentsDirective } from './blogs';
import { AuthService, BlogService, StatsService, UserService } from './services';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SafePipe } from './safe.pipe';
import { BlogComponent } from './admin/blog/blog.component';
import { ImagesComponent } from './admin/blog/images/images.component';

@NgModule({
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
    CommentsDirective,
    DashboardComponent,
    SafePipe,
    BlogComponent,
    ImagesComponent,
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
    BrowserAnimationsModule
  ],
  providers: [AuthService, UserService, StatsService, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
