import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://63a5fbfbf8f3f6d4ab047a82.mockapi.io/api";

export const fetchContacts = createAsyncThunk(
  "contact/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (text, { rejectWithValue }) => {
    try {
      await axios.post("/contacts", text);
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      rejectWithValue(error);
      const { data } = await axios.get("/contacts");
      return data;
    }
  }
);
export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async (
    { contactId, name, last_name, adress, city, country, email, phone_number },
    { rejectWithValue }
  ) => {
    try {
      await axios.put(`/contacts/${contactId}`, {
        name,
        last_name,
        adress,
        city,
        country,
        email,
        phone_number,
      });
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      rejectWithValue(error);
      const { data } = await axios.get("/contacts");
      return data;
    }
  }
);
