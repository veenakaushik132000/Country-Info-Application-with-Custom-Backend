import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:7000/api/countries";

// Fetch countries by search query
export const fetchCountries = createAsyncThunk("countries/fetchAll", async (query) => {
  const response = await axios.get(`${API_URL}?name=${query}`);
  return response.data;
});

// Fetch country details by code
export const fetchCountryDetails = createAsyncThunk("countries/fetchDetails", async (code) => {
  const response = await axios.get(`${API_URL}/${code}`);
  return response.data;
});

const countrySlice = createSlice({
  name: "countries",
  initialState: {
    list: [],
    countryDetail: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCountryDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCountryDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.countryDetail = action.payload;
      })
      .addCase(fetchCountryDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default countrySlice.reducer;
