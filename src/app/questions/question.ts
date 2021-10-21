import {Subject} from "../subjects/subject";
import {Author} from "../authors/author";

export interface Question {
  id:number;
  title:string;
  text:string;
  status:string;
  author:Author;
  subject:Subject;
}
