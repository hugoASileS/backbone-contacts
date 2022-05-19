import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IContactList } from "./IContactList";
import { TOrder } from "../components/Table/Table";

export interface ICustomFetchError {
  data: {
    message: string;
    error: string;
  };
}

const api = process.env.REACT_APP_API;
export const contactsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: api }),
  tagTypes: [],
  endpoints: (builder) => ({
    getAllContacts: builder.query<
      IContactList,
      {
        perPage: number;
        page: number;
        sortProperty: string;
        order: TOrder;
        termsSearch: [string, string | number][];
      }
    >({
      query: ({ perPage, page, sortProperty, order, termsSearch }) => {
        console.log({ termsSearch });
        let includes = "";
        if (termsSearch.length > 0) {
          termsSearch.forEach(([key, value]) => {
            includes = `${includes}&${key}_contains=${value}`;
          });
        }
        let queryParams = `/contacts?perPage=${perPage}&page=${page}&_sort=${sortProperty}:${order}`;
        if (includes !== "") {
          queryParams = queryParams + includes;
        }
        return queryParams;
      },
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetAllContactsQuery } = contactsApi;
