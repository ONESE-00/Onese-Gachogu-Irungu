import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // Add slices here as the app grows
    // example: exampleReducer,
  },
});

/** @typedef {ReturnType<typeof store.getState>} RootState */
/** @typedef {typeof store.dispatch} AppDispatch */
