import { createSlice } from "@reduxjs/toolkit";
const imageSlice = createSlice({
  name: "images",
  initialState: {
    images: [],
    isLoading: false,
  },
  reducers: {
    getImageFetch: (state) => {
      state.isLoading = true;
    },
    getImageSuccess: (state, action) => {
      state.isLoading = false;
      state.images = action.payload;
    },
    getImageReject: (state) => {
      state.isLoading = false;
    },
  },
});
export default imageSlice.reducer;
export const { getImageFetch, getImageReject, getImageSuccess } =
  imageSlice.actions;
