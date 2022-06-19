import {Role} from './role.model';

export interface UserRegister {
  firstName: string;
  familyName: string;
  email: string;
  password: string;
  role?: Role;
  active: Boolean;
}
