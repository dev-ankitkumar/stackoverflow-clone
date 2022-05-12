import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tagsSlice = createApi({
  reducerPath: "categoryTag",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://stgphys.appsndevs.com/seasiaforms/public/api/",
  }),

  endpoints: (builder) => ({
    tagsapi: builder.query({
      query: () => {
        return {
          url: "getcategory",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useTagsapiQuery } = tagsSlice;
