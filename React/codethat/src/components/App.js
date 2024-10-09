import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styles from './App.module.css';
import './App.font.css';

function App({ children }) {
  return (
    <>
      <Nav className={styles.nav} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </>
  );
}

export default App;
