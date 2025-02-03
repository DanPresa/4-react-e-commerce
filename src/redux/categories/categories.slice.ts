import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  loading: false,
  categories: [],
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setCategories: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const categoriesSelector = (state: RootState) => state.categories;
export const { setLoading, setCategories, setError } = categoriesSlice.actions;
export default categoriesSlice.reducer;
