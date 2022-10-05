import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  LocalStorageGet,
  LocalStorageSet,
  SHOPS_KEY_NAME,
} from "../../../utils/localStorage";
import { toast } from "react-toastify";

export interface itemShopState {
  id: string;
  name: string;
  qtd: number;
  total: number;
}

export interface ShopState {
  items: itemShopState[];
}

const ShopLocal: ShopState =
  JSON.parse(LocalStorageGet(SHOPS_KEY_NAME)) || ({} as ShopState);

const initialState: ShopState = {
  items: ShopLocal?.items || ([] as itemShopState[]),
};

export const shopSlice = createSlice({
  name: "shops",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<itemShopState>) => {
      state.items.push(action.payload);
      LocalStorageSet(SHOPS_KEY_NAME, JSON.stringify(state));
      toast.success("Compra Finalizada com sucesso.");
    },
    remove: (state, action: PayloadAction<itemShopState>) => {
      const filtered = state.items.filter(
        (item: itemShopState) => item.name !== action.payload.name
      );
      state.items = filtered;
      LocalStorageSet(SHOPS_KEY_NAME, JSON.stringify(state));
      toast.success("Compra Eliminada com sucesso.");
    },
  },
});

export const { add, remove } = shopSlice.actions;

export default shopSlice.reducer;
