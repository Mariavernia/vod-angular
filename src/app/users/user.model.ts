import {Role} from './role.model';

export interface User {
  firstName: string;
  familyName: string;
  email: string;
  password: string;
  role?: Role;
}
