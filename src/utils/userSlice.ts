import { createSlice } from "@reduxjs/toolkit";
import type { UserType } from "./types";

const userSlice = createSlice({
  name: "user",
  initialState: null as UserType | null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: () => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
