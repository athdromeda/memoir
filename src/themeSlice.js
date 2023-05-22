import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'dark-theme',
  initialState: localStorage.getItem('dark-theme') ? true : false,
  reducers: {
    toggleTheme: (state) => {
      if (state) {
        localStorage.removeItem('dark-theme');
        document.body.classList.remove('dark');
      } else {
        localStorage.setItem('dark-theme', 'true');
        document.body.classList.add('dark');
      }
      return !state;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
