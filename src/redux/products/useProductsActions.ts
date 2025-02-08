import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
  productsSelector,
  setResetProduct,
  setSelectedImage,
} from './products.slice';
import {
  getAllProducts,
  getProductById,
  getProductsByCategory,
} from './products.actions';

const useProductsActions = () => {
  const dispatch = useAppDispatch();
  const { loading, products, product, selectedImage, error } =
    useAppSelector(productsSelector);

  const fetchAllProducts = useCallback(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const fetchProductsByCategory = useCallback(
    (slug: string) => {
      dispatch(getProductsByCategory(slug));
    },
    [dispatch]
  );

  const fetchProductById = useCallback(
    (productId: string) => {
      dispatch(getProductById(productId));
    },
    [dispatch]
  );

  const selectImage = useCallback(
    (image: string) => {
      dispatch(setSelectedImage(image));
    },
    [dispatch]
  );

  const resetProduct = useCallback(() => {
    dispatch(setResetProduct());
  }, [dispatch]);

  return {
    loading,
    products,
    product,
    selectedImage,
    error,
    fetchAllProducts,
    fetchProductsByCategory,
    fetchProductById,
    selectImage,
    resetProduct,
  };
};

export default useProductsActions;
