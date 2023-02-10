import { createSlice } from '@reduxjs/toolkit'


export const initialState = {
questions:   
          [
          {id: '1',
          enunciado: 'Cual es el..',
          estado: 'Oculto'
          },
          {id: '2',
          enunciado: 'Seleccione el',
          estado: 'Visible'},
        ]
}

;

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    onAddNewNote: (state, {payload}) => {
      state.push(payload);
    },
    onDeleteNote: (state) => {
      state = initialState;
    }
  }
});

export const {onAddNewNote, onDeleteNote} = questionSlice.actions;
