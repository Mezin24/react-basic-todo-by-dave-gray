import { createSlice } from '@reduxjs/toolkit';
import { posts } from '../../data/posts';

const initialState = {
  search: '',
  posts,
  searchresults: [],
};

export const PostSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    handleDelete(state, action) {
      state.posts = state.posts.filter(
        (p) => p.id.toString() !== action.payload.toString()
      );
    },
    addNewPost(state, action) {
      state.posts = [action.payload, ...state.posts];
    },
  },
});

export const { setSearch, handleDelete, addNewPost } = PostSlice.actions;

export default PostSlice.reducer;
