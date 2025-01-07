import { useQuery } from "@tanstack/react-query";
import { getPostsByUsername } from "../api";
import Container from "../components/Container";
import PostList from "../components/PostList";
import styles from "./HomePage.module.css";

function HomePage() {
  const username = "codeit"; // 임의로 username을 지정
  const { data: postsDataByUsername } = useQuery({
    queryKey: ["posts", username],
    queryFn: () => getPostsByUsername(username),
  });
  console.log(postsDataByUsername);

  return (
    <Container className={styles.container}>
      <PostList />
    </Container>
  );
}

export default HomePage;
