import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice";
import cursosReducer from "./edicionSlice";
import dividirReducer from "./reduxDividor";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cursos: cursosReducer,
    dividir: dividirReducer
  },
});
