import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'dark-theme',
  initialState: false,
  reducers: {
    toggleTheme: (state) => {
      if (state) {
        document.body.classList.remove('dark');
      } else {
        document.body.classList.add('dark');
      }
      return !state;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
