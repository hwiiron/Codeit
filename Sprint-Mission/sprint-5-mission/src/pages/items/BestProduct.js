import { useEffect, useState } from "react";
import { getBestItems } from "../../api";
import "./BestProduct.css";

function BestProduct() {
  const [items, setItems] = useState([]);

  const handleLoad = async () => {
    const { list } = await getBestItems();
    setItems(list);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <section>
      <div className="bestProduct__inner">
        <h2 className="bestProduct__title">베스트 상품</h2>

        <ul className="bestProduct__itemList">
          {items.map((item) => {
            return (
              <li>
                <article>
                  <figure>
                    <img src={item.images} alt={item.name} />
                  </figure>

                  <dl>
                    <dt>{item.name}</dt>
                    <dd>{item.price.toLocaleString()}원</dd>
                  </dl>

                  <span className="bestProduct__like">
                    {item.favoriteCount}
                  </span>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default BestProduct;
