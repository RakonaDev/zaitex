import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cursos: Array()
};

export const cursosSlice = createSlice({
  name: "cursos",
  initialState,
  reducers: {
    actualizarCursos: (state, action) => {
      const { nuevosCursos } = action.payload;
      state.cursos = nuevosCursos;
    },
  },
});

export const { actualizarCursos } = cursosSlice.actions;
export default cursosSlice.reducer;
