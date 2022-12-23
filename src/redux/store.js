import { configureStore } from "@reduxjs/toolkit";

import { contactReducer } from "./contactSlice";
// Начальное значение состояния Redux для корневого редюсера,
// если не передать параметр preloadedState.

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});
