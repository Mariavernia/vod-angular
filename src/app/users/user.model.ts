import {Role} from "./role.model";

export interface User {
  token: string;
  email?: string;
  role?: Role;
  name?: string;
}
