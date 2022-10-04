import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface itemProductState {
  id: string;
  qtd: number;
  product: string;
  desc: number;
  price: number;
}

export interface CartState {
  items: itemProductState[];
}

const initialState: CartState = {
  items: [] as itemProductState[],
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
    },
    remove: (state, action: PayloadAction<{ id: string }>) => {
      const filtered = state.items.filter(
        (item: itemProductState) => item.id !== action.payload.id
      );
      state.items = filtered;
    },
    edit: () => {},
  },
});

export const { add, remove, edit } = productSlice.actions;

export default productSlice.reducer;
