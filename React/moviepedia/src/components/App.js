import { useCallback, useEffect, useState } from "react";
import { createReview, getReviews, updateReview, deleteReview } from "../api";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";
import useAsync from "../hooks/useAsync";
import LocaleSelect from "./LocaleSelect";
import useTranslate from "../hooks/useTranslate";

const LIMIT = 6;

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  // useCallback을 사용하여 handleCallback 메모이제이션
  const handleCallback = useCallback(() => {
    console.log(`${count}`);
  }, [count]); // count가 변경될 때만 새로운 함수 생성

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={handleCallback}>Callback Button</button>
    </div>
  );
};

const App = () => {
  const t = useTranslate();
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [isLoading, loadingError, getReviewsAsync] = useAsync(getReviews);

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("rating");

  const handleDelete = async (id) => {
    const result = await deleteReview(id);
    if (!result) return;

    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleLoad = useCallback(
    async (options) => {
      let result = await getReviewsAsync(options);
      if (!result) return;

      const { reviews, paging } = result;

      if (options.offset === 0) {
        setItems(reviews);
      } else {
        setItems((prevItems) => [...prevItems, ...reviews]);
      }
      setOffset(options.offset + reviews.length);
      setHasNext(paging.hasNext);
    },
    [getReviewsAsync]
  );

  useEffect(() => {
    handleLoad({ order, offset: 0, limit: LIMIT });
  }, [order, handleLoad]);

  const handleLoadMore = () => {
    handleLoad({ order, offset, limit: LIMIT });
  };

  const handleCreateSuccess = (review) => {
    setItems((prevItems) => [review, ...prevItems]);
  };

  const handleUpdateSuccess = (review) => {
    setItems((prevItems) => {
      const splitIdx = prevItems.findIndex((item) => item.id === review.id);
      return [
        ...prevItems.slice(0, splitIdx),
        review,
        ...prevItems.slice(splitIdx + 1),
      ];
    });
  };

  return (
    <div>
      <ExampleComponent />
      <LocaleSelect />
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>{t("best button")}</button>
      </div>

      <ReviewForm
        onSubmit={createReview}
        onSubmitSuccess={handleCreateSuccess}
      />

      <ReviewList
        items={sortedItems}
        onDelete={handleDelete}
        onUpdate={updateReview}
        onUpdateSuccess={handleUpdateSuccess}
      />
      {hasNext && (
        <button disabled={isLoading} onClick={handleLoadMore}>
          더 보기
        </button>
      )}
      {/* <button disabled={!hasNext} onClick={handleLoadMore}>
        더 보기
      </button> */}

      {loadingError?.message && <span>{loadingError.message}</span>}
    </div>
  );
};

export default App;
