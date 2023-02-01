import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const productApi = createApi({
  reducerPath: "bookingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_APIURL}/product`,
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).auth?.loggedInUser?.token;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", `application/json`);
      return headers;
    },
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    bookingAllDataByPagination: builder.mutation<{}, {}>({
      query: (data) => ({
        url: "/getAllProducts",
        method: "POST",
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const { useBookingAllDataByPaginationMutation } = productApi;
