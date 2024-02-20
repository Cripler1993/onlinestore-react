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
