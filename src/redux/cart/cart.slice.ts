import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState: CartState = {
  products: [],
  openDrawer: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setToggleDrawer: (state) => {
      state.openDrawer = !state.openDrawer;
    },
  },
});

export const cartSelector = (state: RootState) => state.cart;
export const { setProducts, setToggleDrawer } = cartSlice.actions;
export default cartSlice.reducer;
