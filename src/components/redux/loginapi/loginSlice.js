import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginSlice = createApi({
  reducerPath: "login",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://stgphys.appsndevs.com/seasiaforms/public/api/",
  }),

  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (credentials) => {
        return {
          url: "login",
          method: "POST",
          body: { email: credentials.email, password: credentials.password },
        };
      },
    }),
    signup: build.mutation({
      query(data) {
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

export const { useLoginUserMutation, useSignupMutation } = loginSlice;
