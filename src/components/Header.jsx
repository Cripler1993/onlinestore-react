import React from "react";
import Search from "./Search";

export default function Header({ text, setText }) {
  return (
    <header>
      <div className="container">
        <div className="header__row">
          <div className="header__left">
            <p className="header__title">Буше</p>
            <p>продукция</p>
          </div>
          <div className="header__right">
            <Search text={text} setText={setText} />
            <svg
              width="24"
              height="24"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M8.75 7a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zM12 2.25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zm-1 11A7.75 7.75 0 003.25 21v1.25h17.5V21A7.75 7.75 0 0013 13.25h-2zm8.245 7.5H4.755a6.25 6.25 0 016.245-6h2a6.25 6.25 0 016.245 6z"
              ></path>
            </svg>
            <svg
              width="24"
              height="24"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M12 3.25A2.75 2.75 0 009.25 6v.25h5.5V6A2.75 2.75 0 0012 3.25zm4.25 3V6a4.25 4.25 0 00-8.5 0v.25H4.83l-.074.667-1.5 13.5-.093.833H20.838l-.093-.833-1.5-13.5-.074-.667H16.25zm-1.5 1.5V10h1.5V7.75h1.579l1.333 12H4.838l1.333-12h1.58V10h1.5V7.75h5.5z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
