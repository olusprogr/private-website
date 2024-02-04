import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(
    private router: Router
    ) {

    }
  

  login() {
    if (this.username === 'admin' && this.password === 'pass') {
      alert('Logged in successfully');
      this.router.navigate(['/main'])
    } else {
      alert('Invalid credentials');
    }
}}
