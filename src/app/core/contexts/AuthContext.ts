import { Injectable } from '@angular/core';

import { Storage } from '@providers/storage';
import { User } from '@models/user';

const KEY = '@application/session';

@Injectable({
  providedIn: 'root'
})
export class AuthContext {
  constructor() {}

  getLoggedUser(): User {
    const user = Storage.getItem<User>(KEY);
    return user;
  }

  setLoggedUser(user: User): void {
    Storage.setItem(KEY, user);
  }

  logout() {
    Storage.removeItem(KEY);
  }
}
