import React, { useState } from "react";
import CatalogItem from "./CatalogItem";
import { filterArr } from "../utiles/constants";
import SortDropDown from "./SortDropDown";
import Tags from "./Tags";

export default function Catalog({
  products,
  category,
  filter,
  setFilter,
  handleActive,
  activeTags,
  activeClass,
}) {
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
        {products.map(function (elem) {
          return <CatalogItem key={elem.id} elem={elem} />;
        })}
      </div>
    </div>
  );
}
