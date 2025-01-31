import { Route, Routes } from 'react-router';

const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default RouteConfig;

const Home = () => <h1>Home</h1>;

const About = () => <h1>About</h1>;

const Dashboard = () => <h1>Dashboard</h1>;
