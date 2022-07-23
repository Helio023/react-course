import reactDom from 'react-dom/client';
import App from './App';
import './styles/global.scss';
import { BrowserRouter } from 'react-router-dom';
const root = reactDom.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
