var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { StatsComponent } from './stats/stats.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { AdminComponent } from './admin/admin.component';
import { RolesComponent } from './admin/roles/roles.component';
import { UsersComponent } from './admin/users/users.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
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
                PageNotFoundComponent
            ],
            imports: [
                BrowserModule,
                UiModule,
                HttpClientModule,
                FormsModule,
                AppRoutingModule
            ],
            providers: [AuthService, StatsComponent],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map