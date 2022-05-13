import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const addPostQuestionSlice = createApi({
  reducerPath: "PostQuestion",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://stgphys.appsndevs.com/seasiaforms/public/api/",
    prepareHeaders: (headers, { getState }) => {
      const token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTY1NTgxNjA1MDA1ZjdlOGE4NTlkNmY4MDMyNzYxMTE1Yjg0ODIxODU2NmQ2ODQ2OWQ2YjZhMDQwOTBhMGVmNzA3NjUwZGYzZjkzMjdiOTciLCJpYXQiOjE2NTI0MjMyMjEuNDg0NTEyLCJuYmYiOjE2NTI0MjMyMjEuNDg0NTIxLCJleHAiOjE2ODM5NTkyMjEuMjU5MzE4LCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.K4NT-MsyxTiZ_7WrQMLDWXvtVfUdkC0z4XqA-FSa6YKV1uIIgFzntEph_KTTCuSlZgsYNuUZNqFrcGJBPD4LhVgLiJzoAWZRxSFRIaFKTO24liJ-5esWZbsBubHaV03gx_rSyn5VePLUI01ZCaL7cbFoIMyJdWWve_lOCQWrukYvFkwCESYSUas3kTqu1oEXFo9tT_UCzRTjf-iF2dybUulCG6H9dPRCzH_vyUJ5fycPHm2tse5a4L1H6enS6Bnw3OO4YkkOhza4I98GnR8b8HWI4i07n_TNI8U5Pn9wWdRbMpEEh-C5Xlev-1aunLEpQpsEVOkaZUPhiyv-npPrHmtYQP_HMtVqHkCI4oW1o0WbYEft36mQxHkIOhBtjBK9hbzw2c94MtdI_Hvml-4NJQvlUW72f7jbskLHWI1qtVLevESCcNt6QwUczpUuXeayvj7ARy5aBfiOiIOeFx0mj2gU86n9QSNhuUBZGTEAMOU4PQsFZbxpI-SFpCJzR3tmBl8PdjJvxCqN2IAvcGgoG_7K4U28SLr8ifWJYmghd5M9XWaTyIHhp_bVyLb4RnTl16h9RaZ20p4gGLj4aL_9qZmPpkCQXR3yMptxtXGgDOahdCoCRS_YkOiUBrngal06P_vbNA9NqxP7xHVra5PeOHfbajq5FuU8PGmmrK4_6Q8";
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      headers.set("Access-Control-Allow-Origin", "*");
      return headers;
    },
  }),
  tagTypes: ["Post"],

  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => {
        return {
          url: "showpost",
          method: "GET",
        };
      },
      providesTags: ["Post"],
    }),
    addPost: builder.mutation({
      query(x) {
        console.log(x);

        return {
          url: "post",

          method: "POST",
          body: {
            title: `${x.title}`,
            description: `${x.description}`,
            cateogry_id: `${x.selectedData}`,
            post_type: 1,
          },
        };
      },
      invalidatesTags: ["Post"],
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation } = addPostQuestionSlice;
