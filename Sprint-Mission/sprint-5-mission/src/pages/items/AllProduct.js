import { useState } from "react";
import "./AllProduct.css";

function AllProduct() {
  const [isActive, setIsActive] = useState(false);
  const toggleOptionList = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <section className="allProduct">
        <div className="allProduct__inner">
          <div className="allProduct__head">
            <h2 className="allProduct__title">전체 상품</h2>

            <div className="allProduct__controls">
              <input
                className="allProduct__searchInput"
                type="text"
                placeholder="검색할 상품을 입력해 주세요."
              />

              <button className="allProduct__linkButton">상품 등록하기</button>

              <div className="allProduct__select">
                <button
                  className="allProduct__button"
                  onClick={toggleOptionList}
                >
                  최신순
                </button>

                <ul
                  className={`allProduct__optionList ${
                    isActive ? "active" : ""
                  }`}
                >
                  <li>
                    <button>최신순</button>
                  </li>

                  <li>
                    <button>좋아요순</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AllProduct;
