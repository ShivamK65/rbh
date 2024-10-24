import { Component } from '@angular/core';

import {signal} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {merge} from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatButtonModule, MatIconModule,MatFormFieldModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  //email
  first_name= new FormControl('',[Validators.required]);
  last_name=new FormControl('',[Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required]);
  confirm_password = new FormControl('',[Validators.required]);

  password_match:boolean=true

  errorMessage = signal('');

  constructor(public http: HttpClient) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }
  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  //password
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  submit(){
    
    console.log("first name is " + this.first_name.value)
    console.log("last is "+this.last_name.value)
    console.log("email0 is " + this.email.value)
    console.log("password is "+this.password.value)
    console.log("confirm_password is "+this.confirm_password.value)

    if(this.password.value !== this.confirm_password.value){
      this.password_match=false
    }
    else{
      this.password_match=true;
      this.registerUser();
    }

    }

    registerUser() {
      const userData = {
        firstName: this.first_name.value,
        lastName: this.last_name.value,
        email: this.email.value,
        password: this.password.value,
        role: "user",
        isActive: false // Default to inactive
      };
  
      this.http.post('http://localhost:3000/register', userData).subscribe(
        response => {
          console.log('User registered successfully:', response);
          // Optionally, navigate to another page or show a success message
        },
        error => {
          console.error('Error registering user:', error);
          // Handle error appropriately (e.g., show error message)
        }
      );
    }

 
}
