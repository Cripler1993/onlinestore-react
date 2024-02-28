import React, { useState } from "react";
import CatalogItem from "./CatalogItem";
import SortDropDown from "./SortDropDown";
import Tags from "./Tags";
import * as _ from "lodash";
import Pagination from "./Pagination";
import SkeletonItem from "./SkeletonItem";

export default function Catalog({
  products,
  category,
  filter,
  setFilter,
  handleActive,
  activeClass,
  text,
  activeTags,
  currentPage,
  setCurrentPage,
  limit,
  loading,
}) {
  function filterProducts(arr) {
    let searchArr = arr.filter(function (elem) {
      return (
        elem.description.toLowerCase().includes(text.toLowerCase()) ||
        elem.name.toLowerCase().includes(text.toLowerCase())
      );
    });
    if (activeTags.length > 0) {
      return searchArr.filter(function (elem) {
        return _.isEqual(activeTags, elem.tags);
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
          <SortDropDown filter={filter} setFilter={setFilter} />
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
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          filteredProducts={filteredProducts}
          limit={limit}
        />
      </div>
    </div>
  );
}
