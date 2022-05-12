import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postviewSlice = createApi({
  reducerPath: "getPost",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://stgphys.appsndevs.com/seasiaforms/public/api/",
  }),

  endpoints: (builder) => ({
    showpost: builder.query({
      query: () => {
        return {
          url: "showpost",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useShowpostQuery } = postviewSlice;
