import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  LoginRequest,
  RegisterRequest,
  verifyotpReguest,
} from "../interface/userinterface";
import { RootState } from "../store";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_APIURL}/user`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth?.loggedInUser?.token;
      if (token) {
        headers.set("Authorization", `${token}`);
      }
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
    profile: builder.mutation<any, any>({
      query: (data) => ({
        url: "/verify",
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginMutation,
  useVerifyotpMutation,
  useProfileMutation,
} = userApi;
