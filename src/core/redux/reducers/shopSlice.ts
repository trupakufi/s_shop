import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface itemShopState {
  id: string;
  name: string;
  qtd: number;
  total: number;
}

export interface ShopState {
  items: itemShopState[];
}

const initialState: ShopState = {
  items: [] as itemShopState[],
};

export const shopSlice = createSlice({
  name: "shops",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<itemShopState>) => {
      const filtered = state.items.filter(
        (item: itemShopState) => item.name === action.payload.name
      );
      if (filtered.length > 0) return state;
      state.items.push(action.payload);
    },
    remove: (state, action: PayloadAction<itemShopState>) => {
      const filtered = state.items.filter(
        (item: itemShopState) => item.name !== action.payload.name
      );
      state.items = filtered;
    },
  },
});

export const { add, remove } = shopSlice.actions;

export default shopSlice.reducer;
