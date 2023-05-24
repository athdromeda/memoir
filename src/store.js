import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './noteSlice';
import searchQueryReducer from './searchQuerySlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    note: noteReducer,
    darkTheme: themeReducer,
    searchQuery: searchQueryReducer,
  },
});
