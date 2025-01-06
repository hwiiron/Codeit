import Container from '../components/Container';
import PostList from '../components/PostList';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <Container className={styles.container}>
      <PostList />
    </Container>
  );
}

export default HomePage;
