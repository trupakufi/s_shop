import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  AUTH_KEY_NAME,
  LocalStorageGet,
  LocalStorageSet,
} from "../../../utils/localStorage";

export enum UserType {
  "normal",
  "admin",
}

export interface authState {
  user: UserType;
}

const AuthLocal: authState = JSON.parse(LocalStorageGet(AUTH_KEY_NAME) || "{}");

const initialState: authState = {
  user: AuthLocal.user || UserType.normal,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    change: (state) => {
      if (state.user === UserType.admin) state.user = UserType.normal;
      else state.user = UserType.admin;
      toast.success("User Changed");
      LocalStorageSet(AUTH_KEY_NAME, JSON.stringify(state));
    },
  },
});

export const { change } = authSlice.actions;

export default authSlice.reducer;
