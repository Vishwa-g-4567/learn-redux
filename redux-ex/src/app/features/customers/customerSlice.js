import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomerAction: (state, action) => {
      state.push(action.payload);
    },
    deleteCustomerAction: (state, action) => {
      const deleteIndex = action.payload;
      return state.filter((val, index) => index !== deleteIndex);
    },
  },
});

export const { addCustomerAction, deleteCustomerAction } =
  customerSlice.actions;
export default customerSlice.reducer;
