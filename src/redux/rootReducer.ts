import { combineReducers } from '@reduxjs/toolkit';
import categories from './categories/categories.slice';
import products from './products/products.slice';
import favorites from './favorites/favorites.slice';

const rootReducer = combineReducers({
  categories,
  products,
  favorites,
});

export default rootReducer;
