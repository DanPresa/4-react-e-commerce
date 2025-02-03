import { useAppDispatch, useAppSelector } from '../hooks';
import { productsSelector } from './products.slice';
import { getAllProducts } from './products.actions';
import { useCallback } from 'react';

const useProductsActions = () => {
  const dispatch = useAppDispatch();
  const { loading, products, error } = useAppSelector(productsSelector);

  const fetchAllProducts = useCallback(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return { loading, products, error, fetchAllProducts };
};

export default useProductsActions;
