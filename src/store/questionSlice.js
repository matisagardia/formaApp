import { createSlice } from '@reduxjs/toolkit'


export const initialState = {
    id: 'ffasdf',
    enunciado: 'asdfasf',
    estado: 'adsfsadf'
};

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    onAddNewNote: (state, {payload}) => {

    },
    onDeleteNote: (state) => {
      state = initialState;
    }
  }
});

export const {onAddNewNote, onDeleteNote} = questionSlice.actions;
