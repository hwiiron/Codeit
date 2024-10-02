import ReviewList from "./ReviewList";
import { useState } from "react";
import { getReviews } from "../api";

const App = () => {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("rating");

  const handleDelete = (id) => {
    const onDeleteItems = items.filter((item) => item.id !== id);
    setItems(onDeleteItems);
  };

  const handleLoadClick = async () => {
    const { reviews } = await getReviews();
    setItems(reviews);
  };

  return (
    <>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>

      <div>
        <ReviewList items={sortedItems} onDelete={handleDelete} />
      </div>

      <button onClick={handleLoadClick}>불러오기</button>
    </>
  );
};

export default App;
