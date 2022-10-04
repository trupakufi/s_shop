import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

const initialState: CartState = {
  items: [] as itemCartState[],
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
    },
    remove: (state, action: PayloadAction<{ id: string }>) => {
      const filtered = state.items.filter(
        (item: itemCartState) => item.id !== action.payload.id
      );
      state.items = filtered;
    },
    edit: () => {},
  },
});

export const { add, remove, edit } = cartSlice.actions;

export default cartSlice.reducer;
