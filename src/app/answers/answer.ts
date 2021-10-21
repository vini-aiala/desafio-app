import {Author} from "../authors/author";
import {Question} from "../questions/question";

export interface Answer {
  id:number;
  text:string;
  question: Question;
  author: Author;
}
