import { useEffect, useState } from "react";
import { getAllItems } from "../../api";
import ProductControls from "./ProductControls";
import AllProductItem from "./AllProductItem";
import "./AllProduct.css";

function AllProduct() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");

  const itemsLoad = async () => {
    const { list } = await getAllItems();
    setItems(list);
  };

  useEffect(() => {
    itemsLoad();
  }, []);

  // select 커스텀
  const [isActive, setIsActive] = useState(false);
  const toggleOptionList = () => {
    setIsActive(!isActive);
  };

  // 정렬
  const sortedItems = [...items].sort((a, b) => b[order] - a[order]);

  const createdAtClick = () => {
    setOrder("createdAt");
    setIsActive(false);
  };
  const favoriteCountClick = () => {
    setOrder("favoriteCount");
    setIsActive(false);
  };

  return (
    <>
      <section className="allProduct">
        <div className="allProduct__inner">
          <div className="allProduct__head">
            <h2 className="allProduct__title">전체 상품</h2>
            <ProductControls
              order={order}
              isActive={isActive}
              toggleOptionList={toggleOptionList}
              createdAtClick={createdAtClick}
              favoriteCountClick={favoriteCountClick}
            />
          </div>

          <div className="allProduct__body">
            <ul className="allProduct__list">
              {sortedItems.map((item) => {
                return (
                  <li key={item.id}>
                    <a href="/item">
                      <AllProductItem item={item} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <ol className="allProduct__paging">
            <li className="prev">
              <button></button>
            </li>

            <li className="active">
              <button>1</button>
            </li>

            <li>
              <button>2</button>
            </li>

            <li>
              <button>3</button>
            </li>

            <li>
              <button>4</button>
            </li>

            <li>
              <button>5</button>
            </li>

            <li className="next">
              <button></button>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}

export default AllProduct;
