import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axios/axios";

export const fetchAllEpisodes = createAsyncThunk(
  "/episodes/fetchAllEpisodes",
  async (_payload, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("episodes");
      return response.data;
    } catch (error) {
      return rejectWithValue({
        message: error.response?.data?.message || "Failed to fetch data",
        status: error.response?.status,
      });
    }
  }
);

export const fetchEpisodesByQuery = createAsyncThunk(
  "episodes/fetchEpisodesByQuery",
  async (searchQuery, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `episodes?search=${searchQuery}`
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

export const fetchEpisodesByPage = createAsyncThunk(
  "episodes/fetchEpisodesByPage",
  async (pageQuery, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`episodes?page=${pageQuery}`);
      return response.data;
    } catch (error) {
      return rejectWithValue({
        message: error.response?.data?.message || "Failed to fetch data",
        status: error.response?.status,
      });
    }
  }
);
