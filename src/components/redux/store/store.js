import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { loginSlice } from "../loginapi/loginSlice";
import { tagsSlice } from "../loginapi/tagsSlice";
import { showPostSlice } from "../loginapi/showPostSlice";
export const store = configureStore({
  reducer: {
    [loginSlice.reducerPath]: loginSlice.reducer,
    [tagsSlice.reducerPath]: tagsSlice.reducer,
    [showPostSlice.reducerPath]: showPostSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginSlice.middleware),
});
setupListeners(store.dispatch);
