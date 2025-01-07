import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api";
import Post from "./Post";
import styles from "./PostList.module.css";

function PostList() {
  // 여기에 코드를 작성하세요
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    staleTime: 60 * 1000,
    gcTime: 60 * 1000 * 10,
  });

  const posts = data?.results ?? [];

  return (
    <div className={styles.postList}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
