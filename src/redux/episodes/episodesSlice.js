import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllEpisodes,
  fetchEpisodesByPage,
  fetchEpisodesByQuery,
} from "./episodesActions";

const initialState = {
  allEpisodes: [],
  episodesMeta: {},
  currentEpisode: {},
  status: "idle",
  error: null,
};

const episodesSlice = createSlice({
  name: "episodes",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllEpisodes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllEpisodes.fulfilled, (state, action) => {
        state.status = "idle";
        state.allEpisodes = action.payload.data;
        state.episodesMeta = action.payload.meta;
      })
      .addCase(fetchAllEpisodes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchEpisodesByQuery.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEpisodesByQuery.fulfilled, (state, action) => {
        state.status = "idle";
        state.allEpisodes = action.payload.data;
      })
      .addCase(fetchEpisodesByQuery.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchEpisodesByPage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEpisodesByPage.fulfilled, (state, action) => {
        state.status = "idle";
        if (action?.payload?.data) {
          state.allEpisodes = [...state.allEpisodes, ...action.payload.data];
        }
      })
      .addCase(fetchEpisodesByPage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default episodesSlice.reducer;
