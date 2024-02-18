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
  const [activeTags, setActiveTags] = useState([]);

  function handleActive(elem) {
    if (activeClass(elem)) {
      setActiveTags((prev) =>
        prev.filter(function (element) {
          if (prev.length > 1) {
            return element.label != elem.label;
          } else {
            prev = [];
          }
        })
      );
    } else {
      setActiveTags((prev) => [
        ...prev,
        { label: elem.label, value: elem.value },
      ]);
    }
  }

  function activeClass(elem) {
    return activeTags.find(function (element) {
      return elem.label == element.label;
    });
  }
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
            activeClass={activeClass}
          />
        </main>
      </div>
      <Footer />
    </>
  );
}
