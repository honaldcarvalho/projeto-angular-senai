import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'login', component:  LoginComponent, title: 'GAMEMANIA - Login'},
    { path: '', component:  HomeComponent, title: 'GAMEMANIA - Home'},
    { path: 'home', component:  HomeComponent, title: 'Home'},
];