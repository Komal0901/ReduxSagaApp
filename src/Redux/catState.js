import { createSlice } from "@reduxjs/toolkit";
export const catSlice = createSlice({
  name: "cats",
  initialState: {
    cats: [],
    isLoading: false,
  },
  reducers: {
    getCatsFetch: (state) => {
      //here getCatsFetch is a action
      state.isLoading = true;
    },

    getCatSuccess: (state, action) => {
      state.isLoading = false;
      state.cats = action.payload;
    },
  },
});
export const { getCatSuccess, getCatsFetch } = catSlice.actions;
export default catSlice.reducer;
