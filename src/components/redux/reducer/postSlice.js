import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "",
    title: "",
    content: "",
  },
];
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
    postUpdated(state, action) {
      console.log("post exist");
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        console.log("post exist");
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    default: (state, action) => {
      return state; // We return the default state here
    },
  },
});
export const { postAdded, postUpdated } = postsSlice.actions;
export default postsSlice.reducer;
