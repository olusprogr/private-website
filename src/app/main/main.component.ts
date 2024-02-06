import { Component } from '@angular/core';
import { UserService } from '../user.service';

interface User {
  name: string,
  email: string
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  currentUser: User

  constructor(
    private isUser: UserService,
    ) {
    this.currentUser = isUser.getCurrentUser()
  }
}
