import { combineReducers } from '@reduxjs/toolkit';
import categories from './categories/categories.slice';
import products from './products/products.slice';

const rootReducer = combineReducers({
  categories,
  products,
});

export default rootReducer;
