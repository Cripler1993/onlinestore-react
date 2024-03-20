import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Registration from "./Registration";

export default function Login({ setIsOpen }) {
  const [changeModal, setChangeModal] = useState(true);
  return (
    <div className="modal__open">
      <div
        className={
          changeModal ? "modal__body-login" : "modal__body-login modal__close"
        }
      >
        <div className="modal__header">
          <p>вход</p>
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
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
              "& .MuiInputBase-root": {
                border: "1px solid rgba(14, 14, 14, 0.08)",
                outline: "none",
                color: "rgba(14, 14, 14, 0.3)",
                opacity: "1",
                marginBottom: "20px",
              },
              "& ::placeholder": {
                color: "orange",
              },
              // "& .Mui-focused": {
              //   color: "black",
              //   border: "1px solid black",
              //   outline: "none",
              // },
            }}
          >
            <TextField
              fullWidth
              label="телефон или email"
              id="fullWidth"

              // focused
            />
            <TextField
              fullWidth
              label="пароль"
              id="fullWidth"
              type="password"
              // label="Outlined secondary"
              // color="orange"
              // focused
            />
          </Box>
          <button className="modal__btn">войти</button>
        </div>

        <div className="modal__footer">
          <p onClick={() => setChangeModal(false)}>регистрация</p>
          <svg
            width="22"
            height="12"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.667 6L17 10m0 0l-4.333 4M17 10H4"
              stroke="#0E0E0E"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </div>
      <Registration
        setIsOpen={setIsOpen}
        setChangeModal={setChangeModal}
        changeModal={changeModal}
      />
    </div>
  );
}
