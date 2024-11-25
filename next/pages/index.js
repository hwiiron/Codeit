import { useEffect, useState } from "react";
import axios from "../lib/axios";
import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import Head from "next/head";

export async function getStaticProps() {
  const res = await axios.get("/products");
  const products = res.data.results;

  return {
    props: {
      products,
    },
  };
}

export default function Home({ products }) {
  // const [products, setProducts] = useState([]);

  // async function getProducts() {
  //   const res = await axios.get("/products");
  //   const nextProducts = res.data.results;
  //   setProducts(nextProducts);
  // }

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <>
      <Head>
        <title>Codeitmall | 코드잇몰</title>
      </Head>
      <SearchForm />
      <ProductList products={products} />
    </>
  );
}
