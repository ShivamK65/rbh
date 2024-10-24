import { Component } from '@angular/core';
import {LoginComponent} from '../login/login.component'
import {SignupComponent} from '../signup/signup.component'
import { Routes } from '@angular/router';

@Component({
  selector: 'app-routes',
  standalone: true,
  imports: [LoginComponent,SignupComponent],
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.css'
})
export class RoutesComponent {
   routes: Routes = [
    { path: 'login-component', component: LoginComponent },
    { path: 'signup-component', component: SignupComponent },
  ];
}
