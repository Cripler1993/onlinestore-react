import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import Catalog from "../components/Catalog";
import Footer from "../components/Footer";
import { categoryArr, filterArr, tagsArr } from "../utiles/constants";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(categoryArr[0]);
  const [filter, setFilter] = useState(filterArr[0]);
  const [activeTags, setActiveTags] = useState([]);

  function handleActive(elem) {
    setActiveTags((prev) => [
      ...prev,
      { label: elem.label, value: elem.value },
    ]);
  }
  console.log(activeTags);
  useEffect(() => {
    fetch(
      `https://65524c665c69a7790329d96f.mockapi.io/products?category=${category.value}&sortBy=${filter.value.sortBy}&order=${filter.value.order}`
    )
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [category, filter]);
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
            handleActive={handleActive}
            activeTags={activeTags}
          />
        </main>
      </div>
      <Footer />
    </>
  );
}
