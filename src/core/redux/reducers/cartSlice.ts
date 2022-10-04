import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CART_KEY_NAME,
  LocalStorageGet,
  LocalStorageSet,
} from "../../../utils/localStorage";

export interface itemCartState {
  id: string;
  qtd: number;
  product: string;
  desc: number;
  price: number;
}

export interface CartState {
  items: itemCartState[];
}

const CartLocal: CartState =
  JSON.parse(LocalStorageGet(CART_KEY_NAME)) || ({} as CartState);

const initialState: CartState = {
  items: CartLocal?.items || ([] as itemCartState[]),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<itemCartState>) => {
      const filtered = state.items.filter(
        (item: itemCartState) => item.product === action.payload.product
      );
      if (filtered.length > 0) return state;
      state.items.push(action.payload);
      LocalStorageSet(CART_KEY_NAME, JSON.stringify(state));
    },
    remove: (state, action: PayloadAction<{ id: string }>) => {
      const filtered = state.items.filter(
        (item: itemCartState) => item.id !== action.payload.id
      );
      state.items = filtered;
      LocalStorageSet(CART_KEY_NAME, JSON.stringify(state));
    },
    edit: () => {},
    clear: (state) => {
      state.items = [] as itemCartState[];
      LocalStorageSet(CART_KEY_NAME, JSON.stringify(state));
    },
  },
});

export const { add, remove, edit, clear } = cartSlice.actions;

export default cartSlice.reducer;
