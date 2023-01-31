import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
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

    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (data) => ({
        url: "/signin",
        method: "POST",
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useRegisterUserMutation, useLoginMutation } = userApi;
