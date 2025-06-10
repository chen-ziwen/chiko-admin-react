import { combineSlices, configureStore } from "@reduxjs/toolkit";
import type { Action, ThunkAction } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: combineSlices({
    // Add your slices here
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check if needed
    }),
});

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStore, unknown, Action>;