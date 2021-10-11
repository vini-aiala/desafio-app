import {Subject} from "../subjects/subject";

export interface Question {
  id:number;
  title:string;
  text:string;
  status:string;
  author:Object;
  subject:Subject;
}
