import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import axios from "../lib/axios";
import Head from "next/head";

export async function getServerSideProps(context) {
  const { q } = context.query;

  const res = await axios.get(`/products/?q=${q}`);
  const products = res.data.results ?? [];

  return {
    props: {
      products,
      q,
    },
  };
}

export default function Search({ q, products }) {
  return (
    <>
      <Head>
        <title>{q} 검색 결과 - Codeitmall</title>
      </Head>
      <SearchForm initialValue={q} />
      <h2>{q} 검색 결과</h2>
      <ProductList products={products} />
    </>
  );
}
