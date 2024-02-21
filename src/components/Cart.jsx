import React, { useState } from "react";

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  function openCart() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div>
      <svg
        onClick={openCart}
        width="24"
        height="24"
        fill="black"
        xmlns="http://www.w3.org/2000/svg"
        className={!isOpen ? "cart__icon" : "cart__icon cart__icon-active"}
      >
        <path
          clipRule="evenodd"
          d="M12 3.25A2.75 2.75 0 009.25 6v.25h5.5V6A2.75 2.75 0 0012 3.25zm4.25 3V6a4.25 4.25 0 00-8.5 0v.25H4.83l-.074.667-1.5 13.5-.093.833H20.838l-.093-.833-1.5-13.5-.074-.667H16.25zm-1.5 1.5V10h1.5V7.75h1.579l1.333 12H4.838l1.333-12h1.58V10h1.5V7.75h5.5z"
        ></path>
      </svg>
      {/* <svg
        width="20"
        height="20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cart__icon"
      >
        <g clip-path="url(#filled-cart_svg__clip0_52_2323)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.113 7.75a.75.75 0 101.5 0V5.5h4.5v2.25a.75.75 0 001.5 0V5.512c.265.009.49.024.687.05.437.057.629.156.758.278.13.122.24.308.324.74.087.454.125 1.064.18 1.976l.425 7.12c.031.518.048.83.031 1.054a.727.727 0 01-.034.19v.001l-.002.001-.011.005a.724.724 0 01-.176.04c-.223.031-.536.033-1.055.033H4.986c-.52 0-.832-.002-1.055-.032a.724.724 0 01-.176-.04l-.01-.006h-.002l-.001-.002a.723.723 0 01-.034-.19c-.018-.224 0-.536.03-1.055l.426-7.12c.055-.91.093-1.52.18-1.975.084-.432.194-.618.324-.74.129-.122.32-.221.758-.278.197-.026.422-.041.687-.05V7.75zM7.74 4h4.244A2.251 2.251 0 007.74 4zm5.799.01a3.751 3.751 0 00-7.354 0c-.354.009-.672.027-.955.064-.6.08-1.144.252-1.592.674-.448.423-.653.954-.768 1.549-.108.562-.15 1.271-.201 2.12l-.003.05-.426 7.119-.003.046c-.027.457-.052.874-.026 1.214.029.372.125.771.439 1.104.313.333.706.453 1.076.504.337.046.755.046 1.213.046H14.786c.458 0 .875 0 1.213-.046.37-.051.763-.171 1.076-.504.314-.333.41-.732.439-1.104.026-.34 0-.757-.026-1.214l-.003-.046-.426-7.12-.003-.05c-.05-.848-.093-1.557-.201-2.12-.115-.594-.32-1.125-.768-1.548-.448-.422-.992-.595-1.592-.674a9.37 9.37 0 00-.955-.065z"
            fill="#0E0E0E"
          ></path>
          <circle
            cx="16"
            cy="17"
            r="3"
            fill="#FFC665"
            stroke="#fff"
            stroke-width="2"
          ></circle>
        </g>
        <defs>
          <clipPath id="filled-cart_svg__clip0_52_2323">
            <path fill="#fff" d="M0 0h20v20H0z"></path>
          </clipPath>
        </defs>
      </svg> */}
      <div
        className={
          !isOpen ? "cart__container" : "cart__container cart__container-active"
        }
      >
        <div className="cart__header">
          <p>корзина</p>
          <p>пусто</p>
        </div>
        <div className="cart__order">
          <div className="order__left">
            <img
              src="https://imgproxy.bushe.ru/Dhp_xBSGbdpjkoz45MIOj_ax67cZR0EiMkGT3RUh748/q:85/w:800/h:800/rt:fit/el:1/czM6Ly9idXNoZS9tZWRpYS9Qcm9kdWN0L2ltYWdlcy8xMDNlYjlhMS1hZTBmLTQ0NzAtYTA1MS1jYmYwOWExZWQ2ODMv0LHQu9C40L3Rh9C40LrQuC3RgS3RgdGL0YDQvtC8LdC4LdCy0LXRgtGH0LjQvdC-0Lkt0LPQvNGBMi5qcGc.webp"
              alt=""
            />
            <div>
              <p>Омлет</p>
              <p className="order__left-text">180 г</p>
              <p className="order__left-text">кол-во:1</p>
            </div>
          </div>
          <div className="order__right">
            <svg
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
            <p>1000₽</p>
          </div>
        </div>
        <div>
          <div className="cart__price">
            <p>сумма заказа</p>
            <p>1000₽</p>
          </div>
          <div className="cart__btns">
            <button>торты</button>
            <button>продукты</button>
          </div>
        </div>
      </div>
    </div>
  );
}
