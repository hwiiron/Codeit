import ReviewList from "./ReviewList";
import items from "../mock.json";
import { useState } from "react";

const App = () => {
  const [order, setOrder] = useState("createdAt");
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("rating");

  return (
    <>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>

      <div>
        <ReviewList items={sortedItems} />
      </div>
    </>
  );
};

export default App;
