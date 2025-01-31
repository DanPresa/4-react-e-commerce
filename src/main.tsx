import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ThemeConfig from './theme/ThemeConfig.tsx';

createRoot(document.getElementById('root')!).render(
  <ThemeConfig>
    <App />
  </ThemeConfig>
);
