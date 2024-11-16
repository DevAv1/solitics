import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axios/axios";

export const fetchAllCharacters = createAsyncThunk(
  "characters/fetchAllCharacters",
  async (_payload, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("characters");
      return response.data;
    } catch (error) {
      return rejectWithValue({
        message: error.response?.data?.message || "Failed to fetch data",
        status: error.response?.status,
      });
    }
  }
);

export const fetchCharactersByQuery = createAsyncThunk(
  "characters/fetchCharactersByQuery",
  async (searchQuery, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `characters?search=${searchQuery}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue({
        message: error.response?.data?.message || "Failed to fetch data",
        status: error.response?.status,
      });
    }
  }
);

export const fetchCharactersByPage = createAsyncThunk(
  "characters/fetchCharactersByPage",
  async (pageQuery, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`characters?page=${pageQuery}`);
      return response.data;
    } catch (error) {
      return rejectWithValue({
        message: error.response?.data?.message || "Failed to fetch data",
        status: error.response?.status,
      });
    }
  }
);
