import ReactDOM from 'react-dom';
import App from './components/App';
import { LocaleProvider } from './contexts/LocaleContext';

ReactDOM.render(
  <LocaleProvider defaultValue="ko">
    <App />
  </LocaleProvider>,
  document.getElementById('root')
);
