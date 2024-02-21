import React from "react";
import Search from "./Search";
import Cart from "./Cart";

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
            <div>
              <svg
                width="20"
                height="20"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M8.75 7a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zM12 2.25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zm-1 11A7.75 7.75 0 003.25 21v1.25h17.5V21A7.75 7.75 0 0013 13.25h-2zm8.245 7.5H4.755a6.25 6.25 0 016.245-6h2a6.25 6.25 0 016.245 6z"
                ></path>
              </svg>
            </div>
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
}
