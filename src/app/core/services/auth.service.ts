import { AuthContext } from '@contexts/AuthContext';
import { User } from '@models/user';

export class AuthService {
  constructor(private _context: AuthContext) {}

  signin(email: string, password: string) {
    if (!!password) {
      return false;
    }
    const user = new User();
    user.email = email;
    this._context.setLoggedUser(user);
    return true;
  }
}
