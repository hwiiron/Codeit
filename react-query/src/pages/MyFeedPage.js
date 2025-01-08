import PostList from '../components/PostList';
import Container from '../components/Container';
import { FEED_VARIANT } from '../values';
import styles from './MyFeedPage.module.css';

function MyFeedPage() {
  return (
    <Container className={styles.container}>
      <PostList variant={FEED_VARIANT.MY_FEED} />
    </Container>
  );
}

export default MyFeedPage;
