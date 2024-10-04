import { useEffect, useState } from "react";
import FoodList from "./FoodList";
import { getFoods } from "../api";

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [cursor, setCursor] = useState();

  const handleNewestClick = () => setOrder("createdAt");
  const handleCalorieClick = () => setOrder("calorie");

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleLoad = async ({ order, cursor }) => {
    const {
      foods,
      paging: { nextCursor },
    } = await getFoods({ order, cursor });

    if (!cursor) {
      setItems(foods);
    } else {
      setItems((prevItems) => [...prevItems, ...foods]);
    }
    setCursor(nextCursor);
  };

  useEffect(() => {
    handleLoad({ order });
  }, [order]);

  const handleLoadMore = () => {
    handleLoad({ order, cursor });
  };

  return (
    <>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleCalorieClick}>칼로리순</button>
      </div>

      <FoodList items={sortedItems} onDelete={handleDelete} />
      {cursor && <button onClick={handleLoadMore}>더 보기</button>}
    </>
  );
}

export default App;
