import React from 'react';
import './index.css';
import { useRoutes } from 'hookrouter';
import routes from './routes';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  const match = useRoutes(routes);
  return match || <NotFoundPage />;
};

export default App;
