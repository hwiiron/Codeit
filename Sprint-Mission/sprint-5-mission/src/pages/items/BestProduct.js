import { useEffect, useState } from "react";
import { getBestItems } from "../../api";
import BestProductItem from "./BestProductItem";
import "./BestProduct.css";

function BestProduct() {
  const [items, setItems] = useState([]);

  const itemsLoad = async () => {
    const { list } = await getBestItems();
    setItems(list);
  };

  useEffect(() => {
    itemsLoad();
  }, []);

  return (
    <section>
      <div className="bestProduct__inner">
        <h2 className="bestProduct__title">베스트 상품</h2>

        <ul className="bestProduct__list">
          {items.map((item) => {
            return (
              <li key={item.id}>
                <a href="/item">
                  <BestProductItem item={item} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default BestProduct;
