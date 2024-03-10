import React, { useState } from "react";
import CatalogItem from "./CatalogItem";
import SortDropDown from "./SortDropDown";
import Tags from "./Tags";
import * as _ from "lodash";
import Pagination from "./Pagination";
import SkeletonItem from "./SkeletonItem";
import { useSelector } from "react-redux";

export default function Catalog({
  products,
  handleActive,
  activeClass,
  activeTags,
  loading,
}) {
  const { currentPage, limit } = useSelector((store) => store.pagination);
  const { text, category } = useSelector((store) => store.filter);
  function filterProducts(arr) {
    let searchArr = arr.filter(function (elem) {
      return (
        elem.description.toLowerCase().includes(text.toLowerCase()) ||
        elem.name.toLowerCase().includes(text.toLowerCase())
      );
    });
    if (activeTags.length > 0) {
      return searchArr.filter(function (elem) {
        return _.isEqual(activeTags.sort(), elem.tags.sort());
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
              return <CatalogItem key={elem.id} elem={elem} />;
            })}
      </div>
      <div>
        <Pagination filteredProducts={filteredProducts} />
      </div>
    </div>
  );
}
