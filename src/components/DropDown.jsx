import React, { useState } from "react";
import { categoryArr } from "../utiles/constants";

export default function DropDown({ category, setCategory }) {
  const [isOpen, setIsOpen] = useState(false);
  let rotateIcon = isOpen ? "rotate__icon" : "";
  function handleOpen() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div className="drop">
      <div onClick={handleOpen} className="drop__header">
        <p className="drop__name">категория</p>
        <div className={`drop__icon ${rotateIcon}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.00039 9.59203L3.70328 5.29492L2.28906 6.70914L8.00039 12.4205L13.7117 6.70914L12.2975 5.29492L8.00039 9.59203Z"
              fill="#000"
            />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className="drop__content">
          {categoryArr.map(function (elem) {
            return (
              <button
                onClick={() => setCategory(elem)}
                className={
                  category.value == elem.value
                    ? "drop__btn drop__btn-active"
                    : "drop__btn"
                }
                key={elem.value}
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
