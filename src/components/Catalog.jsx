import CatalogItem from "./CatalogItem";
import SortDropDown from "./SortDropDown";
import Tags from "./Tags";
import * as _ from "lodash";
import Pagination from "./Pagination";
import SkeletonItem from "./SkeletonItem";
import CartSnackBar from "./CartSnackBar";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Catalog({ handleActive, activeClass }) {
  const { currentPage, limit } = useSelector((store) => store.pagination);
  const { text, category, activeTags } = useSelector((store) => store.filter);
  const { loading, products } = useSelector((store) => store.products);
  const [isOpen, setIsOpen] = useState(false);

  function filterProducts(arr) {
    let searchArr = arr.filter(function (elem) {
      return (
        elem.description.toLowerCase().includes(text.toLowerCase()) ||
        elem.name.toLowerCase().includes(text.toLowerCase())
      );
    });
    if (activeTags.length > 0) {
      let activeTagsCopy = [...activeTags];
      return searchArr.filter(function (elem) {
        return _.isEqual(activeTagsCopy.sort(), elem.tags.sort());
      });
    }
    return searchArr;
  }

  let filteredProducts = filterProducts(products);
  let start = limit * (currentPage - 1);
  let finish = limit * currentPage;
  let sliceArr = filteredProducts.slice(start, finish);

  const skeleton = [...new Array(6)];
  return (
    <div className="catalog">
      <div className="catalog__top">
        <div className="catalog__row">
          <h1 className="catalog__title">{category.label}</h1>
          <span className="catalog__count">{products.length} товаров</span>
        </div>
        <div>
          <SortDropDown />
        </div>
      </div>
      <div>
        <Tags handleActive={handleActive} activeClass={activeClass} />
      </div>
      <div className="catalog__body">
        {loading
          ? skeleton.map(function (elem, index) {
              return <SkeletonItem key={index} />;
            })
          : sliceArr.map(function (elem) {
              return (
                <CatalogItem key={elem.id} elem={elem} setIsOpen={setIsOpen} />
              );
            })}
      </div>
      <div>
        <Pagination filteredProducts={filteredProducts} />
      </div>
      <CartSnackBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
