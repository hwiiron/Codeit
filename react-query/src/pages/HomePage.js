import Container from "../components/Container";
import PostList from "../components/PostList";
import { FEED_VARIANT } from "../values";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <Container className={styles.container}>
      <PostList variant={FEED_VARIANT.HOME_FEED} />
    </Container>
  );
}

export default HomePage;
