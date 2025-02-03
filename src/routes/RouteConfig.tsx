import { Route, Routes } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import ProductPage from '../pages/products';
import ProductDetails from '../pages/products/ProductDetails';

const RouteConfig = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<ProductPage />} />
        <Route
          path="/product-details/:productId/:productTitle"
          element={<ProductDetails />}
        />
      </Route>
    </Routes>
  );
};

export default RouteConfig;
