import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./characters/charactersSlice";
import episodesReducer from "./episodes/episodesSlice";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    episodes: episodesReducer,
  },
});
