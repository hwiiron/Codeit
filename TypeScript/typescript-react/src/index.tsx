import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LocaleContextProvider } from './translate';

ReactDOM.render(
  <LocaleContextProvider>
    <App />
  </LocaleContextProvider>,
  document.getElementById('root')
);
