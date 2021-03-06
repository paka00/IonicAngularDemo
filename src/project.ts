import {projectImage} from './projectImage';


export class Project {
  name: string;
  client: string;
  startDate: string;
  endDate: string;
  link: String;
  description: String;
  images: Array<projectImage>;
}
