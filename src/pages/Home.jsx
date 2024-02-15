import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import Catalog from "../components/Catalog";
import Footer from "../components/Footer";
import { categoryArr, filterArr } from "../utiles/constants";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(categoryArr[0]);
  const [filter, setFilter] = useState(filterArr[0]);
  useEffect(() => {
    fetch(
      `https://65524c665c69a7790329d96f.mockapi.io/products?category=${category.value}`
    )
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [category]);
  return (
    <>
      <Header />
      <div className="container">
        <main className="main__row">
          <Filter category={category} setCategory={setCategory} />
          <Catalog
            products={products}
            category={category}
            filter={filter}
            setFilter={setFilter}
          />
        </main>
      </div>
      <Footer />
    </>
  );
}
