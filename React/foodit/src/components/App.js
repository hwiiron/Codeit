import { useState } from "react";
import FoodList from "./FoodList";
import mockList from "../mock.json";

function App() {
  const [items, setItems] = useState(mockList);
  const [order, setOrder] = useState("createdAt");

  const handleNewestClick = () => setOrder("createdAt");
  const handleCalorieClick = () => setOrder("calorie");

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleDelete = (id) => {
    const newitems = items.filter((item) => item.id !== id);
    setItems(newitems);
  };

  return (
    <div>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleCalorieClick}>칼로리순</button>
      <FoodList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
