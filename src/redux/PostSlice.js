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
  },
});

export const { setSearch } = PostSlice.actions;

export default PostSlice.reducer;
