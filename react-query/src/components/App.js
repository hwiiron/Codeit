import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import './App.font.css';

function App() {
  return (
    <div className={styles.body}>
      <Outlet />
    </div>
  );
}

export default App;
