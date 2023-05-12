import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import catSlice from "./catState";
import Saga from "./catSaga";
import imageSlice from "./ImageState";
const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    catsData: catSlice,
    imageData: imageSlice,
  },
  middleware: [saga],
});

saga.run(Saga);
