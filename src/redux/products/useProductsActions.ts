import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { productsSelector } from './products.slice';
import { getAllProducts, getProductsByCategory } from './products.actions';

const useProductsActions = () => {
  const dispatch = useAppDispatch();
  const { loading, products, error } = useAppSelector(productsSelector);

  const fetchAllProducts = useCallback(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const fetchProductsByCategory = useCallback(
    (slug: string) => {
      dispatch(getProductsByCategory(slug));
    },
    [dispatch]
  );

  return {
    loading,
    products,
    error,
    fetchAllProducts,
    fetchProductsByCategory,
  };
};

export default useProductsActions;
