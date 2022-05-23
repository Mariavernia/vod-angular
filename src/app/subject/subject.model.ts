import {Season} from "./season.model";
import {User} from "../users/user.model";

export interface Subject {
  id: string;
  name: string;
  description: string;
  seasonsList: Season[];
  authorList: User[];
}
