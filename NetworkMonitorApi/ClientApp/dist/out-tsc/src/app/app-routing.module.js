var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { SignUpComponent } from './login';
import { AdminComponent } from './admin';
import { SignInComponent } from './login';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { PageNotFoundComponent } from './page-not-found';
import { StatsComponent } from './stats';
import { ProfileComponent } from './profile';
import { BlogsComponent } from './blogs';
var appRoutes = [
    { path: 'home', component: HomeComponent },
    { path: 'admin', component: AdminComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'stats', component: StatsComponent },
    { path: 'login', component: SignInComponent },
    { path: 'register', component: SignUpComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'blog', component: BlogsComponent },
    { path: '**', component: PageNotFoundComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(appRoutes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map