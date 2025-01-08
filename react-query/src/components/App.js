import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import styles from './App.module.css';
import './App.font.css';

function App() {
  return (
    <>
      <Navigation className={styles.nav} />
      <div className={styles.body}>
        <Outlet />
      </div>
    </>
  );
}

export default App;
