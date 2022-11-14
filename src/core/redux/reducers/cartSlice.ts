import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CART_KEY_NAME,
  LocalStorageGet,
  LocalStorageSet,
} from "../../../utils/localStorage";
import { toast } from "react-toastify";

export interface itemCartState {
  id: string;
  qtd: number;
  product: string;
  desc: string;
  price: number;
}

export interface CartState {
  items: itemCartState[];
}

const CartLocal: CartState = JSON.parse(LocalStorageGet(CART_KEY_NAME) || "{}");

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
      toast.success("Produto Adicionado ao Carrinho com sucesso");
    },
    remove: (state, action: PayloadAction<{ id: string }>) => {
      const filtered = state.items.filter(
        (item: itemCartState) => item.id !== action.payload.id
      );
      state.items = filtered;
      LocalStorageSet(CART_KEY_NAME, JSON.stringify(state));
      toast.success("Produto Removido do Carrinho com sucesso");
    },
    edit: () => {},
    clear: (state) => {
      state.items = [] as itemCartState[];
      LocalStorageSet(CART_KEY_NAME, JSON.stringify(state));
      toast.success("Carrinho limpo com sucesso");
    },
  },
});

export const { add, remove, edit, clear } = cartSlice.actions;

export default cartSlice.reducer;
