import axiosInstance from '../../config/api/axiosInstance';
import { AppDispatch } from '../store';
import { setError, setLoading, setProducts } from './products.slice';

export const getAllProducts = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading());

  try {
    const { data } = await axiosInstance.get<ProductData>('/products');

    dispatch(setProducts(data));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(setError(error.message));
    } else {
      dispatch(setError(error));
    }
  }
};
