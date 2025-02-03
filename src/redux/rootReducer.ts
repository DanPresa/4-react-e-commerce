import { combineReducers } from '@reduxjs/toolkit';
import categories from './categories/categories.slice';

const rootReducer = combineReducers({
  categories,
});

export default rootReducer;
