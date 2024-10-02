import mockItems from "./pokemons.json";
import { useState } from "react";

function Pokemon({ item, onDelete }) {
  const handleDeleteItem = () => {
    onDelete(item.id);
  };

  return (
    <div>
      No.{item.id} {item.name}
      <button onClick={handleDeleteItem}>삭제</button>
    </div>
  );
}

function App() {
  const [items, setItems] = useState(mockItems);
  const [direction, setDirection] = useState(1);
  const handleAscClick = () => setDirection(1);
  const handleDescClick = () => setDirection(-1);

  const sortedItems = items.sort((a, b) => direction * (a.id - b.id));

  const DeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <>
      <div>
        <button onClick={handleAscClick}>도감번호 순서대로</button>
        <button onClick={handleDescClick}>도감순서 반대로</button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>
            <Pokemon item={item} onDelete={DeleteItem} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
