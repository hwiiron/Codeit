import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { getPosts, getPostsByUsername, uploadPost } from '../api';
import Post from './Post';
import { FEED_VARIANT } from '../values';
import LoadingPage from '../pages/LoadingPage';
import ErrorPage from '../pages/ErrorPage';
import styles from './PostList.module.css';
import PostForm from './PostForm';

function PostList({ variant = FEED_VARIANT.HOME_FEED, showPostForm }) {
  let postsQueryKey;
  let postsQueryFn;

  if (variant === FEED_VARIANT.HOME_FEED) {
    postsQueryKey = ['posts'];
    postsQueryFn = getPosts;
  } else if (variant === FEED_VARIANT.MY_FEED) {
    const username = 'codeit';
    postsQueryKey = ['posts', username];
    postsQueryFn = () => getPostsByUsername(username);
  } else {
    console.warn('Invalid feed request.');
  }

  const {
    data: postsData,
    isPending,
    isError,
  } = useQuery({
    queryKey: postsQueryKey,
    queryFn: postsQueryFn,
  });
  
  const queryClient = useQueryClient();

  const uploadPostMutation = useMutation({
    mutationFn: (newPost) => uploadPost(newPost),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleUploadPost = (newPost) => {
    uploadPostMutation.mutate(newPost, {
      onSuccess: () => {
        toast('포스트가 성공적으로 업로드 되었습니다!');
      },
    });
  };

  if (isPending) return <LoadingPage />;

  if (isError) return <ErrorPage />;

  const posts = postsData?.results ?? [];

  return (
    <div className={styles.postList}>
      {showPostForm ? (
        <PostForm
          onSubmit={handleUploadPost}
          buttonDisabled={uploadPostMutation.isPending}
        />
      ) : (
        ''
      )}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
