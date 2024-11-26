import axios from "@/lib/axios";
import styles from "@/styles/Product.module.css";
import SizeReviewList from "@/components/SizeReviewList";
import StarRating from "@/components/StarRating";
import Image from "next/image";
import { useState } from "react";
import Dropdown from "@/components/Dropdown";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Product({ product, sizeReviews: initialSizeReviews }) {
  const [sizeReviews, setSizeReviews] = useState(initialSizeReviews);
  const [formValue, setFromValue] = useState({
    size: "M",
    sex: "male",
    height: 173,
    fit: "good",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sizeReview = {
      ...formValue,
      productId: product.id,
    };
    const response = await axios.post("/size_reviews/", sizeReview);
    const newSizeReview = response.data;
    setSizeReviews((prevSizereviews) => [newSizeReview, ...prevSizereviews]);
  };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleChange = async (name, value) => {
    setFromValue({
      ...formValue,
      [name]: value,
    });
  };

  if (!product)
    return (
      <div className={styles.loading}>
        <Spinner />
      </div>
    );

  return (
    <>
      <h1 className={styles.name}>
        {product.name}
        <span className={styles.englishName}>{product.englishName}</span>
      </h1>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image fill src={product.imgUrl} alt={product.name} />
        </div>
        <div>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>제품 정보</h2>
            <div className={styles.info}>
              <table className={styles.infoTable}>
                <tbody>
                  <tr>
                    <th>브랜드 / 품번</th>
                    <td>
                      {product.brand} / {product.productCode}
                    </td>
                  </tr>
                  <tr>
                    <th>제품명</th>
                    <td>{product.name}</td>
                  </tr>
                  <tr>
                    <th>가격</th>
                    <td>
                      <span className={styles.salePrice}>
                        {product.price.toLocaleString()}원
                      </span>{" "}
                      {product.salePrice.toLocaleString()}원
                    </td>
                  </tr>
                  <tr>
                    <th>포인트 적립</th>
                    <td>{product.point.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <th>구매 후기</th>
                    <td className={styles.starRating}>
                      <StarRating value={product.starRating} />{" "}
                      {product.starRatingCount.toLocaleString()}
                    </td>
                  </tr>
                  <tr>
                    <th>좋아요</th>
                    <td className={styles.like}>
                      ♥{product.likeCount.toLocaleString()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>사이즈 추천</h2>
            <SizeReviewList sizeReviews={sizeReviews ?? []} />
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>사이즈 추천하기</h2>
            <form className={styles.sizeForm} onSubmit={handleSubmit}>
              <label className={styles.label}>
                사이즈
                <Dropdown
                  className={styles.input}
                  name="size"
                  value={formValue.size}
                  options={[
                    { label: "S", value: "S" },
                    { label: "M", value: "M" },
                    { label: "L", value: "L" },
                    { label: "XL", value: "XL" },
                  ]}
                  onChange={handleChange}
                />
              </label>
              <label className={styles.label}>
                성별
                <Dropdown
                  className={styles.input}
                  name="sex"
                  value={formValue.sex}
                  onChange={handleChange}
                  options={[
                    { label: "남성", value: "male" },
                    { label: "여성", value: "female" },
                  ]}
                />
              </label>
              <label className={styles.label}>
                키
                <Input
                  className={styles.input}
                  name="height"
                  min="50"
                  max="200"
                  type="number"
                  value={formValue.height}
                  onChange={handleInputChange}
                />
              </label>
              <label className={styles.label}>
                사이즈 추천
                <Dropdown
                  className={styles.input}
                  name="fit"
                  value={formValue.fit}
                  options={[
                    { label: "작음", value: "small" },
                    { label: "적당함", value: "good" },
                    { label: "큼", value: "big" },
                  ]}
                  onChange={handleChange}
                />
              </label>
              <Button className={styles.submit}>작성하기</Button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
