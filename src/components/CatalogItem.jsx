import React from "react";
import { Link } from "react-router-dom";

export default function CatalogItem({ elem }) {
  return (
    <div className="catalog__item">
      <div className="catalog__img">
        <Link to={`/product/${elem.id}`}>
          <img src={elem.img[0]} alt="" />
        </Link>
        <div className="catalog__svg">
          <svg
            width="24"
            height="24"
            fill="rgb(240, 167, 45)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M12 3.25A2.75 2.75 0 009.25 6v.25h5.5V6A2.75 2.75 0 0012 3.25zm4.25 3V6a4.25 4.25 0 00-8.5 0v.25H4.83l-.074.667-1.5 13.5-.093.833H20.838l-.093-.833-1.5-13.5-.074-.667H16.25zm-1.5 1.5V10h1.5V7.75h1.579l1.333 12H4.838l1.333-12h1.58V10h1.5V7.75h5.5z"
            ></path>
          </svg>
        </div>
        <div className="catalog__tags">
          {elem.tags.map(function (element, index) {
            return (
              <div className="catalog__tag" key={index}>
                {element}
              </div>
            );
          })}
        </div>
      </div>
      <div className="catalog__info">
        <p className="catalog__name">{elem.name}</p>
        <div className="catalog__bottom">
          <div className="catalog__price">{elem.price}₽</div>
          <div className="catalog__portion">{elem.serving_size}</div>
        </div>
      </div>
    </div>
  );
}
