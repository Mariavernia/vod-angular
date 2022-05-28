import {Season} from "./season.model";

export interface Video {
  id: string;
  name: string;
  description: string;
  link: string;
  season: Season;

}
