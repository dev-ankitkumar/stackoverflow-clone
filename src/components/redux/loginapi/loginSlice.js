import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginSlice = createApi({
  reducerPath: "loginApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://stgphys.appsndevs.com/seasiaforms/public/api/",

    // prepareHeaders: (headers, { getState }) => {
    //   // Get token from store (userSlice)
    //   console.log(getState);
    //   // const token = getState().user.currentUser?.token;

    //   // Add token to headers
    //   // if (token) {
    //   //   headers.set('Authorization', `Bearer ${token}`);
    //   // }

    //   return headers;
    // },
  }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => {
        console.log(credentials.email, "username");
        return {
          url: "login",
          method: "POST",
          body: { email: credentials.email, password: credentials.password },
        };
      },
    }),
    signup: builder.mutation({
      query: (data) => {
        console.log(data);
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
