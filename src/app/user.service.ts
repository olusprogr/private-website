import { Injectable } from '@angular/core';

interface User {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User

  constructor() {
    this.currentUser = {
      name: '',
      email: ''
    }
  }

  setCurrentUser(user: User) {
    this.currentUser = user
  }

  getCurrentUser() {
    return this.currentUser
  }
}


// test