import { useEffect } from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import Catalog from "../components/Catalog";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { clearPage } from "../redux/slices/paginationReducer";
import { addActiveTag, removeActiveTag } from "../redux/slices/filterReducer";
import { fetchProducts } from "../redux/slices/productsReducer";

export default function Home() {
  const { category, filter, activeTags } = useSelector((store) => store.filter);
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
    const params = new URLSearchParams();
    params.append("category", category.value);
    params.append("sortBy", filter.value.sortBy);
    params.append("order", filter.value.order);
    dispatch(fetchProducts(params));
  }, [category, filter]);
  return (
    <>
      <Header />
      <div className="container">
        <main className="main__row">
          <Filter />
          <Catalog handleActive={handleActive} activeClass={activeClass} />
        </main>
      </div>
      <Footer />
    </>
  );
}
