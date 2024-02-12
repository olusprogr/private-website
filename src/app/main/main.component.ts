import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


type User = {
  name: string,
  email: string
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  currentUser: User | undefined
  testingList: string[] = ['test1', 'test2', 'test3']

  constructor(
    private isUser: UserService,
    private router: Router
    ) {
      let currentUser = this.isUser.getCurrentUser()
      console.log(currentUser)
      if (currentUser) {
        this.currentUser = currentUser
      } else {
        this.currentUser = {
          name: '',
          email: ''
        }
      }
  }

  getUserName(): string {
    return this.currentUser?.name || ''
  }

  lougout() {
    this.isUser.logout()
    this.router.navigate(['/login'])
  }
}
