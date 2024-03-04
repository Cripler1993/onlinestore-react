import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import Catalog from "../components/Catalog";
import Footer from "../components/Footer";
import { baseUrl, categoryArr, filterArr } from "../utiles/constants";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(categoryArr[0]);
  const [filter, setFilter] = useState(filterArr[0]);
  const [activeTags, setActiveTags] = useState([]);
  const [text, setText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const limit = 6;

  function clearFilters() {
    setCategory(categoryArr[0]);
    setFilter(filterArr[0]);
    setActiveTags([]);
    setText("");
  }

  function handleActive(elem) {
    setCurrentPage(1);
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
    setLoading(true);
    const params = new URLSearchParams();
    params.append("category", category.value);
    params.append("sortBy", filter.value.sortBy);
    params.append("order", filter.value.order);
    axios.get(baseUrl, { params }).then((json) => {
      setProducts(json.data);
      setLoading(false);
    });
  }, [category, filter]);
  return (
    <>
      <Header text={text} setText={setText} setCurrentPage={setCurrentPage} />
      <div className="container">
        <main className="main__row">
          <Filter
            category={category}
            setCategory={setCategory}
            clearFilters={clearFilters}
            setCurrentPage={setCurrentPage}
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
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            limit={limit}
            loading={loading}
          />
        </main>
      </div>
      <Footer />
    </>
  );
}
