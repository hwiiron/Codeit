import { ToastContainer } from 'react-toastify';
import PostList from '../components/PostList';
import Container from '../components/Container';
import { FEED_VARIANT } from '../values';
import styles from './MyFeedPage.module.css';

function MyFeedPage() {
  return (
    <Container className={styles.container}>
      <ToastContainer position="top-center" autoClose={2000} />
      <PostList variant={FEED_VARIANT.MY_FEED} showPostForm={true} />
    </Container>
  );
}

export default MyFeedPage;
