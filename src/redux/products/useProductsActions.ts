import { useCallback } from 'react';
import axiosInstance from '../../config/api/axiosInstance';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
  productsSelector,
  setError,
  setLoading,
  setProduct,
  setProducts,
  setResetProduct,
  setSelectedImage,
} from './products.slice';

const useProductsActions = () => {
  const dispatch = useAppDispatch();
  const { loading, products, product, selectedImage, error } =
    useAppSelector(productsSelector);

  const getAllProducts = useCallback(async () => {
    dispatch(setLoading());

    try {
      const { data } = await axiosInstance.get<ProductData>('/products');

      dispatch(setProducts(data));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      } else {
        dispatch(setError('An error occurred'));
      }
    }
  }, [dispatch]);

  const getProductsByCategory = useCallback(
    async (category: string) => {
      dispatch(setLoading());

      try {
        const { data } = await axiosInstance.get<ProductData>(
          `/products/category/${category}`
        );

        dispatch(setProducts(data));
      } catch (error) {
        if (error instanceof Error) {
          dispatch(setError(error.message));
        } else {
          dispatch(setError('An error occurred'));
        }
      }
    },
    [dispatch]
  );

  const getProductById = useCallback(
    async (productId: string) => {
      dispatch(setLoading());

      try {
        const { data } = await axiosInstance.get<Product>(
          `/products/${productId}`
        );

        dispatch(setProduct(data));
      } catch (error) {
        if (error instanceof Error) {
          dispatch(setError(error.message));
        } else {
          dispatch(setError('An error occurred'));
        }
      }
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
    getAllProducts,
    getProductsByCategory,
    getProductById,
    selectImage,
    resetProduct,
  };
};

export default useProductsActions;
