import { useEffect, useState } from "react";
import { getAllItems } from "../../api";
import ProductControls from "./ProductControls";
import AllProductItem from "./AllProductItem";
import "./AllProduct.css";

const pageSize = 10;

function AllProduct() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const pageLimit = 5; // 보여쥴 페이지 버튼 수
  const totalPages = Math.ceil(totalCount / pageSize); // 전체 페이지 수 계산

  const startPage = Math.floor((currentPage - 1) / pageLimit) * pageLimit + 1;
  const endPage = Math.min(startPage + pageLimit - 1, totalPages);

  const itemsLoad = async (options) => {
    const { list, totalCount } = await getAllItems(options);
    setItems(list);
    setTotalCount(totalCount); // 전체 데이터 수 업데이트
  };

  useEffect(() => {
    itemsLoad({ page: currentPage, orderBy: order });
  }, [currentPage, order]); // 페이지나 정렬 방식이 변경될 때마다 데이터 로드

  const recentClick = () => {
    setOrder("recent");
    setIsActive(false);
  };

  const favoriteClick = () => {
    setOrder("favorite");
    setIsActive(false);
  };

  // 해당하는 페이지 로드
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // select 커스텀
  const [isActive, setIsActive] = useState(false);
  const toggleOptionList = () => {
    setIsActive(!isActive);
  };

  // 정렬
  const sortedItems = [...items].sort((a, b) => b[order] - a[order]);

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
              recentClick={recentClick}
              favoriteClick={favoriteClick}
            />
          </div>

          <div className="allProduct__body">
            <ul className="allProduct__list">
              {sortedItems.map((item) => (
                <li key={item.id}>
                  <a href="/item">
                    <AllProductItem item={item} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ol className="allProduct__paging">
            <li className="prev">
              <button
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
              ></button>
            </li>

            {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
              <li
                key={startPage + index}
                className={currentPage === startPage + index ? "active" : ""}
              >
                <button onClick={() => handlePageChange(startPage + index)}>
                  {startPage + index}
                </button>
              </li>
            ))}

            <li className="next">
              <button
                onClick={() =>
                  handlePageChange(Math.min(currentPage + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              ></button>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}

export default AllProduct;
