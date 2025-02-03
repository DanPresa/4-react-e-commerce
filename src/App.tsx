import { useEffect } from 'react';
import useCategoryActions from './redux/categories/useCategoryActions';
import RouteConfig from './routes/RouteConfig';

const App = () => {
  const { fetchCategories } = useCategoryActions();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return <RouteConfig />;
};

export default App;
