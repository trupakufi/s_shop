import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  LocalStorageGet,
  LocalStorageSet,
  PRODUCT_KEY_NAME,
} from "../../../utils/localStorage";

export interface itemProductState {
  id: string;
  qtd: number;
  product: string;
  desc: string;
  price: number;
}

export interface ProductState {
  items: itemProductState[];
}

const ProductsLocal: ProductState =
  JSON.parse(LocalStorageGet(PRODUCT_KEY_NAME)) || ({} as ProductState);

const initialState: ProductState = {
  items: ProductsLocal?.items || ([] as itemProductState[]),
};

export const productSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    add: (state, action: PayloadAction<itemProductState>) => {
      const filtered = state.items.filter(
        (item: itemProductState) => item.product === action.payload.product
      );
      if (filtered.length > 0) return state;
      state.items.push(action.payload);
      LocalStorageSet(PRODUCT_KEY_NAME, JSON.stringify(state));
    },
    remove: (state, action: PayloadAction<{ id: string }>) => {
      const filtered = state.items.filter(
        (item: itemProductState) => item.id !== action.payload.id
      );
      state.items = filtered;
      LocalStorageSet(PRODUCT_KEY_NAME, JSON.stringify(state));
    },
    edit: (
      state,
      action: PayloadAction<{ id: string; newProduct: itemProductState }>
    ) => {
      const filtered = state.items.filter(
        (item: itemProductState) => item.id !== action.payload.id
      );
      if (filtered.length === 0) return state;
      const index = state.items.findIndex(
        (item: itemProductState) => item.id === action.payload.id
      );
      state.items[index] = action.payload.newProduct;
      LocalStorageSet(PRODUCT_KEY_NAME, JSON.stringify(state));
    },
  },
});

export const { add, remove, edit } = productSlice.actions;

export default productSlice.reducer;
