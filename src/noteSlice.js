import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'Note 1',
    content:
      'Lorem ipsum dolor sit amet constectura lorem ipsum dolor sit amet',
  },
  {
    id: 2,
    title: 'Note 1',
    content: 'Lorem ipsum dolor sit amet',
  },
];

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
      state = state.sort((a, b) => b.id - a.id);
    },
  },
});

export const { addNote } = noteSlice.actions;
export default noteSlice.reducer;
