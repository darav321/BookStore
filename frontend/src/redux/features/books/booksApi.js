import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../utils/baseURL";

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrl()}/api/books`,
  credentials: "include",
  prepareHeaders: (Headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      Headers.set("Autorization", `Bearer ${token}`);
    }
    return Headers;
  },
});

const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery,
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    fetchAllBooks: builder.query({
      query: () => "/home",
      providesTags: ["Books"]
    }),
    fetchBooksById : builder.query({
      query : (id) => `/${id}`,
      providesTags : (result, error, id) => [{type : "Books", id}],
    }),
    addBook : builder.mutation({
      query : (newBook) => ({
        url : `/create-book`,
        method : "POST",
        body : newBook
      }),
      invalidatesTags : ["Books"]
    }),
    updateBook : builder.mutation({
      query : ({id, ...rest}) => ({
        url : `/edit/${id}`,
        method : "PUT",
        body : rest,
        headers : {
          'Content-Type' : 'application-json'
        }
      }),
      invalidatesTags : ["Books"]
    }),
    deleteBook : builder.mutation({
      query : (id) => ({
        url : `${id}`,
        method : "DELETE"
      }),
      invalidatesTags : ["Books"]
    })
  }),
});

export const {useFetchAllBooksQuery, useFetchBooksByIdQuery, useAddBookMutation, useUpdateBookMutation, useDeleteBookMutation} = booksApi

export default booksApi
