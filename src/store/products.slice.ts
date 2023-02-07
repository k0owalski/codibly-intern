import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export interface ProductsState {
  total: number;
  total_pages: number;
  data: Product[];
}

const initialState: ProductsState = {
  total: 12,
  total_pages: 3,
  data: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductsState>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
