import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  LoginRequest,
  RegisterRequest,
  verifyotpReguest,
} from "../interface/userinterface";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_APIURL}/user`,
    prepareHeaders: (headers, { getState }) => {
      // const token = (getState() as RootState).auth?.loggedInUser?.token;
      // if (token) {
      //   headers.set("Authorization", `Bearer ${token}`);
      // }
      headers.set("Content-Type", `application/json`);
      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    registerUser: builder.mutation<any, RegisterRequest>({
      query: (data) => ({
        url: "/signup",
        method: "POST",
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["User"],
    }),

    login: builder.mutation<any, LoginRequest>({
      query: (data) => ({
        url: "/signin",
        method: "POST",
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["User"],
    }),
    verifyotp: builder.mutation<any, verifyotpReguest>({
      query: (data) => ({
        url: "/verifyotp",
        method: "POST",
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginMutation,
  useVerifyotpMutation,
} = userApi;
