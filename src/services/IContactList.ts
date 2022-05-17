import { IContact } from "./IContact";

export interface IContactList {
  count: number;
  perPage: number;
  currentPage: number;
  totalPage: number;
  results: Array<IContact>;
}
