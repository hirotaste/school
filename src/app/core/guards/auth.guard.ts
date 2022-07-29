import { CanActivate, CanActivateChild, Router, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthContext } from '@contexts/AuthContext';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private useAuth: AuthContext) {}

  canActivate(): boolean | UrlTree {
    return this.guard();
  }

  canActivateChild(): boolean | UrlTree {
    return this.guard();
  }

  private guard(): boolean | UrlTree {
    const user = this.useAuth.getLoggedUser();

    if (!user) {
      return this.router.parseUrl('/login');
    }

    return true;
  }
}
