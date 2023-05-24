import { createSlice } from '@reduxjs/toolkit';
const searchQuerySlice = createSlice({
  name: 'search-query',
  initialState: '',
  reducers: {
    setQuery: (state, action) => {
      return action.payload;
    },
  },
});

export const { setQuery } = searchQuerySlice.actions;
export default searchQuerySlice.reducer;
