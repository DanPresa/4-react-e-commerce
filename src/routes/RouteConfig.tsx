import { Route, Routes } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import ProductPage from '../pages/products';

const RouteConfig = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<ProductPage />} />
      </Route>
    </Routes>
  );
};

export default RouteConfig;
