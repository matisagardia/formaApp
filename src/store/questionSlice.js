import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    id: '',
    enunciado: '',
    estado: ''
}

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    onAddNewNote: (state, {payload}) => {

    },
    onDeleteNote: (state, {payload}) => {

    }
  }
});

export const {onAddNewNote, onDeleteNote} = questionSlice.actions;
