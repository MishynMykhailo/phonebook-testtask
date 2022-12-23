import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(text) {
        return {
          payload: {
            ...text,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        return state.filter((contact) => contact.id !== action.payload);
      },
    },
  },
});
// Генераторы экшенов
export const { addContact, deleteContact } = contactSlice.actions;
// Редюсер слайса

export const contactReducer = contactSlice.reducer;
