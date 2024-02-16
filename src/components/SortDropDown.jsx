import React, { useState } from "react";
import { filterArr } from "../utiles/constants";

export default function SortDropDown({ filter, setFilter }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div onClick={handleOpen} className="catalog__filter">
      <div
        className={
          isOpen ? "catalog__filter-row filter__active" : "catalog__filter-row"
        }
      >
        <p className="catalog__filter-title">{filter.label}</p>
        <svg
          width="18"
          height="15"
          viewBox="0 0 19 16"
          fill=""
          class="filter__icon"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.8872 6.30715L15.2089 3.6288L15.2089 15H13.7089V3.6288L11.0305 6.30715L9.96984 5.24649L13.9285 1.28781L14.4589 0.757477L14.9892 1.28781L18.9479 5.24649L17.8872 6.30715ZM8.79628 9.69283L6.11792 12.3712V0.999997L4.61792 0.999997V12.3712L1.93957 9.69283L0.878906 10.7535L4.83759 14.7122L5.36792 15.2425L5.89825 14.7122L9.85694 10.7535L8.79628 9.69283Z"
            fill=""
          ></path>
        </svg>
      </div>
      {isOpen && (
        <div className="catalog__filter-list">
          {filterArr.map(function (elem) {
            return (
              <button
                onClick={() => setFilter(elem)}
                className={
                  elem.label == filter.label
                    ? "filter__btn filter__active"
                    : "filter__btn"
                }
              >
                {elem.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
