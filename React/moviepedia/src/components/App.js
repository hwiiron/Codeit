import ReviewList from "./ReviewList";
import items from "../mock.json";

const App = () => {
  return (
    <div>
      <ReviewList items={items} />
    </div>
  );
};

export default App;
