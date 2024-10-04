import ReviewList from "./ReviewList";
import { useEffect, useState } from "react";
import { getReviews } from "../api";

const LIMIT = 6;

const App = () => {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false);

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("rating");

  const handleDelete = (id) => {
    const onDeleteItems = items.filter((item) => item.id !== id);
    setItems(onDeleteItems);
  };

  const handleLoad = async (options) => {
    const { reviews, paging } = await getReviews(options);
    if (options.offset === 0) {
      setItems(reviews);
    } else {
      setItems((prevItems) => [...prevItems, ...reviews]);
    }
    setOffset(options.offset + reviews.length);
    setHasNext(paging.hasNext);
  };

  useEffect(() => {
    handleLoad({ order, offset: 0, limit: LIMIT });
  }, [order]);

  const handleLoadMore = () => {
    handleLoad({ order, offset, limit: LIMIT });
  };

  return (
    <>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>

      <ReviewList items={sortedItems} onDelete={handleDelete} />
      {hasNext && <button onClick={handleLoadMore}>더 보기</button>}
      {/* <button disabled={!hasNext} onClick={handleLoadMore}>
        더 보기
      </button> */}
    </>
  );
};

export default App;
