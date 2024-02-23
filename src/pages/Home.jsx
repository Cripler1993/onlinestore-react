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
  const [text, setText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  function clearFilters() {
    setCategory(categoryArr[0]);
    setFilter(filterArr[0]);
    setActiveTags([]);
    setText("");
  }

  function handleActive(elem) {
    if (activeClass(elem)) {
      setActiveTags((prev) =>
        prev.filter(function (element) {
          return element != elem;
        })
      );
    } else {
      setActiveTags((prev) => [...prev, elem]);
    }
  }

  function activeClass(elem) {
    return activeTags.find(function (element) {
      return elem == element;
    });
  }
  useEffect(() => {
    fetch(
      `https://65524c665c69a7790329d96f.mockapi.io/products?category=${category.value}&sortBy=${filter.value.sortBy}&order=${filter.value.order}&page=${currentPage}&limit=6`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      });
  }, [category, filter, currentPage]);
  return (
    <>
      <Header text={text} setText={setText} />
      <div className="container">
        <main className="main__row">
          <Filter
            category={category}
            setCategory={setCategory}
            clearFilters={clearFilters}
          />
          <Catalog
            products={products}
            category={category}
            filter={filter}
            setFilter={setFilter}
            handleActive={handleActive}
            activeClass={activeClass}
            text={text}
            activeTags={activeTags}
          />
        </main>
        <div>
          <button
            disabled={currentPage == 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            {"<"}
          </button>
          <span>{currentPage}</span>
          <button
            disabled={currentPage == 4}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            {">"}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
