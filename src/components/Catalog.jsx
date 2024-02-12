import React from "react";
import CatalogItem from "./CatalogItem";

export default function Catalog({ products }) {
  return (
    <div className="catalog">
      <div className="catalog__top">
        <div className="catalog__row">
          <h1 className="catalog__title">Вся продукция</h1>
          <span className="catalog__count">{products.length} товаров</span>
        </div>
        <div></div>
      </div>
      <div className="catalog__body">
        {products.map(function (elem) {
          return <CatalogItem key={elem.id} elem={elem} />;
        })}
      </div>
    </div>
  );
}
