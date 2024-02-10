import { Injectable } from '@angular/core';

type User = {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser?: User

  constructor() {}

  setCurrentUser(user: User): void {
    this.currentUser = user
  }

  getCurrentUser(): User | undefined{
    return this.currentUser
  }

  logout(): void {
    this.currentUser = {
      name: '',
      email: ''
    }
  }
}
