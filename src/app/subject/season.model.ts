import {Video} from "./video.model";

export interface Season {
  id: string;
  name: string;
  videoList: Video[];
}
