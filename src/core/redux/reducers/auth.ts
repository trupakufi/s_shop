import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export enum UserType {
  "normal",
  "admin",
}

export interface authState {
  user: UserType;
}

const initialState: authState = {
  user: UserType.normal,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    change: (state) => {
      if (state.user === UserType.admin) state.user = UserType.normal;
      else state.user = UserType.admin;
      toast.success("User Changed");
    },
  },
});

export const { change } = authSlice.actions;

export default authSlice.reducer;
