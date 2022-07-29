import { CanActivate, CanActivateChild, Router, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthContext } from '@contexts/AuthContext';

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private useAuth: AuthContext) {}

  canActivate(): Promise<boolean | UrlTree> {
    return this.guard();
  }

  canActivateChild(): Promise<boolean | UrlTree> {
    return this.guard();
  }

  private async guard(): Promise<boolean | UrlTree> {
    const user = await this.useAuth.getLoggedUser();

    if (user) {
      return this.router.parseUrl('/students');
    }

    return true;
  }
}
