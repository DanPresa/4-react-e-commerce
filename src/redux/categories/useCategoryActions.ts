import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { categoriesSelector } from './categories.slice';
import { getCategories } from './categories.actions';

const useCategoryActions = () => {
  const dispatch = useAppDispatch();
  const { loading, categories, error } = useAppSelector(categoriesSelector);

  const fetchCategories = useCallback(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return {
    loading,
    categories,
    error,
    fetchCategories,
  };
};

export default useCategoryActions;
