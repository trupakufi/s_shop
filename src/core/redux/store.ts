import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import shopReducer from "./reducers/shopSlice";
import cartReducer from "./reducers/cartSlice";
import productReducer from "./reducers/productSlice";
import authReducer from "./reducers/auth";

const store = configureStore({
  reducer: {
    products: productReducer,
    shops: shopReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
