import productImg from "../assets/product_thumbnail.svg";

async function testFunc() {
  const response = await fetch(
    "https://panda-market-api.vercel.app/products?page=1&pageSize=10&orderBy=recent"
  );
  const data = await response.json();
  console.log(data);
}

testFunc();

function BestProduct() {
  return (
    <section>
      <div className="bestProduct__inner">
        <h2 className="bestProduct__title">베스트 상품</h2>

        <ul className="bestProduct__itemList">
          <li>
            <article>
              <figure>
                <img src={productImg} alt="아이패드 미니" />
              </figure>

              <dl>
                <dt>아이패드 미니 팝니다</dt>
                <dd>500,000원</dd>
              </dl>

              <span className="bestProduct__like">240</span>
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default BestProduct;
