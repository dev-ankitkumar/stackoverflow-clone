import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginSlice = createApi({
  reducerPath: "loginApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://stgphys.appsndevs.com/seasiaforms/public/api/",
  }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => {
        // console.log(credentials.email, "username");
        return {
          url: "login",
          method: "POST",
          body: { email: credentials.email, password: credentials.password },
        };
      },
    }),
    signup: builder.mutation({
      query: (data) => {
        // console.log(data);
        return {
          url: "register",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = loginSlice;
