import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";

export default function Registration({
  setIsOpen,
  setChangeModal,
  changeModal,
}) {
  return (
    <div
      className={
        !changeModal
          ? "modal__body-registration"
          : "modal__body-registration modal__close"
      }
    >
      <div className="modal__header">
        <p>регистрация</p>
        <svg
          onClick={() => setIsOpen(false)}
          width="24"
          height="24"
          fill="#000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M6.94 8L.47 1.53 1.53.47 8 6.94 14.47.47l1.06 1.06L9.06 8l6.47 6.47-1.06 1.06L8 9.06l-6.47 6.47-1.06-1.06L6.94 8z"
          ></path>
        </svg>
      </div>
      <div className="modal__inputs">
        <div className="form-item">
          <input id="email" type="tel" required />
          <label htmlFor="email">телефон</label>
        </div>
        <div className="form-item">
          <input id="password" type="text" required />
          <label htmlFor="password">email</label>
        </div>
        <div className="form-item">
          <input id="password" type="password" required />
          <label htmlFor="password">пароль</label>
        </div>
        <div className="form-item">
          <input id="password" type="password" required />
          <label htmlFor="password">пароль еще раз</label>
        </div>
        <button className="modal__btn">регистрация</button>
      </div>
      <div className="modal__footer">
        <p onClick={() => setChangeModal(true)}>у меня уже есть аккаунт</p>
      </div>
    </div>
  );
}
