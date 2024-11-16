import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllCharacters,
  fetchCharactersByPage,
  fetchCharactersByQuery,
} from "./charactersActions";

const initialState = {
  allCharacters: [],
  charactersMeta: {},
  currentCharacter: {},
  status: "idle",
  error: null,
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    updateCharactersData: (state, action) => {
      state.allCharacters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCharacters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllCharacters.fulfilled, (state, action) => {
        state.status = "idle";
        state.allCharacters = action.payload.data;
        state.charactersMeta = action.payload.meta;
      })
      .addCase(fetchAllCharacters.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchCharactersByQuery.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCharactersByQuery.fulfilled, (state, action) => {
        state.status = "idle";
        state.allCharacters = action.payload.data;
      })
      .addCase(fetchCharactersByQuery.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchCharactersByPage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCharactersByPage.fulfilled, (state, action) => {
        state.status = "idle";
        if (action?.payload?.data) {
          state.allCharacters = [
            ...state.allCharacters,
            ...action.payload.data,
          ];
        }
      })
      .addCase(fetchCharactersByPage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { updateCharactersData } = charactersSlice.actions;
export default charactersSlice.reducer;
