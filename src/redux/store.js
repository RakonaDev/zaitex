import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice";
import cursosReducer from "./edicionSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cursos: cursosReducer,
  },
});
