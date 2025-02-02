import { Route, Routes } from 'react-router';
import MainLayout from '../layouts/MainLayout';

const RouteConfig = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default RouteConfig;

const Home = () => {
  return <div>Home</div>;
};

const About = () => {
  return <div>About</div>;
};
