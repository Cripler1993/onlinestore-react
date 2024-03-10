import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, previousPage } from "../redux/slices/paginationReducer";

export default function Pagination({ filteredProducts }) {
  const { currentPage, limit } = useSelector((store) => store.pagination);
  const dispatch = useDispatch();
  let maxPage = Math.ceil(filteredProducts.length / limit);
  return (
    <div className="pagination">
      <div className="pagination__btn-row">
        <button
          className="pagination__btn"
          disabled={currentPage == 1}
          onClick={() => dispatch(previousPage())}
        >
          <svg
            className="rotate__svg"
            width="20"
            height="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.94 8L.47 1.53 1.53.47l7 7 .53.53-.53.53-7 7-1.06-1.06L6.94 8z"
              fill="#000"
            ></path>
          </svg>
        </button>
        <button
          className="pagination__btn"
          disabled={currentPage == maxPage}
          onClick={() => dispatch(nextPage())}
        >
          <svg
            width="20"
            height="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.94 8L.47 1.53 1.53.47l7 7 .53.53-.53.53-7 7-1.06-1.06L6.94 8z"
              fill="#000"
            ></path>
          </svg>
        </button>
      </div>
      <div className="pagination__count">
        <p>страница</p>
        <p>{currentPage}</p>
        <p>из {maxPage}</p>
      </div>
    </div>
  );
}
