import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import ThemeConfig from './theme/ThemeConfig.tsx';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeConfig>
      <App />
    </ThemeConfig>
  </BrowserRouter>
);
