import React, { useState } from "react";
import CatalogItem from "./CatalogItem";
import SortDropDown from "./SortDropDown";
import Tags from "./Tags";
import * as _ from "lodash";

export default function Catalog({
  products,
  category,
  filter,
  setFilter,
  handleActive,
  activeClass,
  text,
  activeTags,
}) {
  function filterProducts(arr) {
    return arr
      .filter(function (elem) {
        return (
          elem.description.toLowerCase().includes(text.toLowerCase()) ||
          elem.name.toLowerCase().includes(text.toLowerCase())
        );
      })
      .filter(function (elem) {
        // return ()
      });
  }
  let filteredProducts = filterProducts(products);
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
        {filteredProducts.map(function (elem) {
          return <CatalogItem key={elem.id} elem={elem} />;
        })}
      </div>
    </div>
  );
}
