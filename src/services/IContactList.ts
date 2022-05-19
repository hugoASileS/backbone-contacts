import { IContact } from "./IContact";

export interface IContactList {
  count: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
  results: Array<IContact>;
}
