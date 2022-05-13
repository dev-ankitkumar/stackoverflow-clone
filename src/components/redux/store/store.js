import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { loginSlice } from "../loginapi/loginSlice";
import { tagsSlice } from "../loginapi/tagsSlice";
// import { getPostsSlice } from "../loginapi/getPostsSlice";
import { addPostQuestionSlice } from "../loginapi/postQuestionSlice";
export const store = configureStore({
  reducer: {
    [loginSlice.reducerPath]: loginSlice.reducer,
    [tagsSlice.reducerPath]: tagsSlice.reducer,
    [addPostQuestionSlice.reducerPath]: addPostQuestionSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      addPostQuestionSlice.middleware,
      tagsSlice.middleware,
      loginSlice.middleware,  
    ]),
});
setupListeners(store.dispatch);
