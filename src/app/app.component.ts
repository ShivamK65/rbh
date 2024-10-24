import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {ProductsComponent} from './products/products.component'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoginComponent } from './login/login.component';
import { RoutesComponent } from './routes/routes.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductsComponent,MatSlideToggleModule,LoginComponent,RoutesComponent,RouterLink,RouterLinkActive,SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
