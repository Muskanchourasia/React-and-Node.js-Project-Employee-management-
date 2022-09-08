import { createSlice } from "@reduxjs/toolkit";

export const UserReducer = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {
    userData: (state, action) => {
      state.users = action.payload;
    },
  },
});
export const { userData } = UserReducer.actions;
export default UserReducer.reducer;
