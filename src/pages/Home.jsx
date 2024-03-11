import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import Catalog from "../components/Catalog";
import Footer from "../components/Footer";
import { baseUrl, filterArr } from "../utiles/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { clearPage } from "../redux/slices/paginationReducer";
import {
  addActiveTag,
  removeActiveTag,
  selectCurrentTag,
} from "../redux/slices/filterReducer";

export default function Home() {
  const [products, setProducts] = useState([]);
  const { category, filter, activeTags } = useSelector((store) => store.filter);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  function handleActive(elem) {
    dispatch(clearPage());
    if (activeClass(elem)) {
      dispatch(removeActiveTag(elem));
    } else {
      dispatch(addActiveTag(elem));
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
      <Header />
      <div className="container">
        <main className="main__row">
          <Filter />
          <Catalog
            products={products}
            handleActive={handleActive}
            activeClass={activeClass}
            loading={loading}
          />
        </main>
      </div>
      <Footer />
    </>
  );
}
