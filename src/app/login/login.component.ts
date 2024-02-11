import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

type User = {
  name: string;
  email: string;
}

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
  styleUrls: [
    './login.component.css',
    '../../styles.css'
  ]
})
export class LoginComponent {
  username = '';
  password = '';
  currentUser: User

  constructor(
    private router: Router,
    private user: UserService
    ) {
      this.currentUser = {
        name: '',
        email: ''
      };
    }
  
  login() {
    if (this.username === 'admin' && this.password === 'pass') {
      alert('Logged in successfully');
      this.router.navigate(['/main'])
      this.user.setCurrentUser(this.currentUser = {
        name: "Administrator",
        email: 'olus.main@gmail.com'
      })
    } else {
      alert('Invalid credentials');
    }
}}
