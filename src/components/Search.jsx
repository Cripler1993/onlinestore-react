import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearPage } from "../redux/slices/paginationReducer";
import { setText } from "../redux/slices/filterReducer";

export default function Search() {
  const { text } = useSelector((store) => store.filter);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  function openSearch() {
    setIsOpen(true);
  }
  function closeSearch() {
    setIsOpen(false);
  }
  function handleChange(e) {
    dispatch(clearPage());
    dispatch(setText(e.target.value));
  }

  return (
    <div>
      <svg
        onClick={openSearch}
        width="24"
        height="24"
        fill="black"
        xmlns="http://www.w3.org/2000/svg"
        className={
          !isOpen ? "search__icon" : "search__icon search__icon-active"
        }
      >
        <path
          clipRule="evenodd"
          d="M14.783 6.471a5.877 5.877 0 10-8.312 8.312 5.877 5.877 0 008.312-8.312zm-9.372-1.06a7.377 7.377 0 0110.937 9.876l4.182 4.183-1.06 1.06-4.183-4.182A7.378 7.378 0 015.411 5.41z"
        ></path>
      </svg>
      <div
        className={!isOpen ? "search__row" : "search__row search__row-active"}
      >
        <svg
          width="24"
          height="24"
          fill="rgb(202, 205, 208)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M14.783 6.471a5.877 5.877 0 10-8.312 8.312 5.877 5.877 0 008.312-8.312zm-9.372-1.06a7.377 7.377 0 0110.937 9.876l4.182 4.183-1.06 1.06-4.183-4.182A7.378 7.378 0 015.411 5.41z"
          ></path>
        </svg>
        <div className="search__input">
          <input
            onChange={handleChange}
            value={text}
            type="text"
            placeholder="слойка, торт, кекс..."
          />
        </div>
        <div className="search__close">
          <svg
            onClick={closeSearch}
            width="16"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.94 8L2.803 3.863l1.06-1.06L8 6.939l4.137-4.136 1.06 1.06L9.061 8l4.136 4.136-1.06 1.06L8 9.06l-4.136 4.137-1.06-1.06L6.94 8z"
              fill="#75787C"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
