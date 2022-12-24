import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from "./operations";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    items: [],
    isLoading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    // fetchContacts
    builder.addCase(fetchContacts.pending.toString(), (state, action) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchContacts.fulfilled.toString(), (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.items = action.payload;
    });
    builder.addCase(fetchContacts.rejected.toString(), (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // addContact
    builder.addCase(addContact.pending.toString(), (state, action) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(addContact.fulfilled.toString(), (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.items = action.payload;
    });
    builder.addCase(addContact.rejected.toString(), (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // deleteContact
    builder.addCase(deleteContact.pending.toString(), (state, action) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(deleteContact.fulfilled.toString(), (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.items = action.payload;
    });
    builder.addCase(deleteContact.rejected.toString(), (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // updateContact
    builder.addCase(updateContact.pending.toString(), (state, action) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(updateContact.fulfilled.toString(), (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.items = action.payload;
    });
    builder.addCase(updateContact.rejected.toString(), (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const contactReducer = contactSlice.reducer;
