import { useEffect, useState } from "react";
import { getBestItems } from "../../api";
import BestProductItem from "./BestProductItem";
import "./BestProduct.css";

function BestProduct() {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(4); // 해상도에 따라 동적으로 설정

  const itemsLoad = async (options) => {
    const { list } = await getBestItems(options);
    setItems(list);
  };

  // 해상도에 따라 pageSize 변경
  useEffect(() => {
    const updatePageSize = () => {
      if (window.innerWidth >= 1200) {
        setPageSize(4); // 데스크탑
      } else if (window.innerWidth >= 744) {
        setPageSize(2); // 태블릿
      } else {
        setPageSize(1); // 모바일
      }
    };

    updatePageSize();
    window.addEventListener("resize", updatePageSize);
    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  useEffect(() => {
    itemsLoad({ pageSize });
  }, [pageSize]);

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
