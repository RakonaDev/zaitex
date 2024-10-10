import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dividorWidth : "350px",
  dividorMain: "100%",
  dividorResponsive: false
}

export const dividirSlice = createSlice({
  name: "dividir",
  initialState,
  reducers: {
    setDividorWidth: (state, action) => {
      const { palanca } = action.payload;
      if(palanca){
        state.dividorWidth = "93px";
        state.dividorMain = "100%";
      }
      else{
        state.dividorWidth = "350px"
        state.dividorMain = "100%"
      }
      state.dividorResponsive = !state.dividorResponsive;
    },
  },
});

export const { setDividorWidth } = dividirSlice.actions;
export default dividirSlice.reducer;