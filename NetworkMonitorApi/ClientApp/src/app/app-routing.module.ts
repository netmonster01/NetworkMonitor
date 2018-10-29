import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './login';
import { AdminComponent } from './admin';
import { RolesComponent } from './admin';
import { UsersComponent } from './admin';
import { SignInComponent } from './login';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home';
import { PageNotFoundComponent } from './page-not-found';
import { StatsComponent } from './stats';
import { ProfileComponent } from './profile';
import { BlogsComponent} from './blogs';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'stats', component: StatsComponent },
  { path: 'login', component: SignInComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'blog', component: BlogsComponent },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
