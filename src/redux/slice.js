import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  codigo_alumno: "",
  hash_codigo: "",
  nombre_alumno: "",
  apellido_alumno: "",
  foto_alumno: "",
  dni_alumno: "",
  fecha_registro: "",
  gmail_recuperacion: "",
  contrasena: "",
  sexo: "",
  contacto: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const {
        codigo_alumno,
        nombre_alumno,
        apellido_alumno,
        foto_alumno,
        dni_alumno,
        fecha_registro,
        gmail_recuperacion,
        contrasena,
        sexo,
        contacto,
        hash_codigo
      } = action.payload;
      state.codigo_alumno = codigo_alumno;
      state.nombre_alumno = nombre_alumno;
      state.apellido_alumno = apellido_alumno;
      state.foto_alumno = foto_alumno;
      state.dni_alumno = dni_alumno;
      state.fecha_registro = fecha_registro;
      state.gmail_recuperacion = gmail_recuperacion;
      state.contrasena = contrasena;
      state.contacto = contacto;
      state.sexo = sexo;
      state.hash_codigo = hash_codigo;
    },
    actualizarUser: (state, action) => {
      const { gmail_recuperacion, sexo, contacto } = action.payload;
      state.gmail_recuperacion = gmail_recuperacion;
      state.sexo = sexo;
      state.contacto = contacto;
    },
  },
});

export const { addUser } = userSlice.actions;
export const { actualizarUser } = userSlice.actions;
export default userSlice.reducer;
