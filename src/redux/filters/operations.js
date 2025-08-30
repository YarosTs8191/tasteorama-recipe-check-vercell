import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axiosInstance";

export const fetchCategories = createAsyncThunk(
  "filters/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/categories");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Fetch categories failed");
    }
  }
);

export const fetchIngredients = createAsyncThunk(
  "filters/fetchIngredients",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/ingredients");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Fetch ingredients failed"
      );
    }
  }
);
