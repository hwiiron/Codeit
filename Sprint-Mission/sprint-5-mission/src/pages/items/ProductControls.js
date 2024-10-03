const ProductControls = ({
  order,
  isActive,
  toggleOptionList,
  createdAtClick,
  favoriteCountClick,
}) => {
  return (
    <div className="allProduct__controls">
      <input
        className="allProduct__searchInput"
        type="text"
        placeholder="검색할 상품을 입력해 주세요."
      />

      <a href="/addItem" className="allProduct__linkButton">
        상품 등록하기
      </a>

      <div className="allProduct__select">
        <button className="allProduct__button" onClick={toggleOptionList}>
          {order === "createdAt" ? "최신순" : "좋아요순"}
        </button>

        <ul className={`allProduct__optionList ${isActive ? "active" : ""}`}>
          <li>
            <button onClick={createdAtClick}>최신순</button>
          </li>

          <li>
            <button onClick={favoriteCountClick}>좋아요순</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductControls;
