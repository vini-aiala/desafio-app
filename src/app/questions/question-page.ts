import {Question} from "./question";

export interface QuestionPage {
  content: Question[]
  empty: boolean
  first: boolean
  last: boolean
  number: number
  numberOfElements: number
  pageable: Object
  size: number
  sort: Object
  totalElements: number
  totalPages: number
}
