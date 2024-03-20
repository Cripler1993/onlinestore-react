// import { withStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";

export default function Registration({
  setIsOpen,
  setChangeModal,
  changeModal,
}) {
  // const CssTextField = withStyles({
  //   root: {
  //     "& label.Mui-focused": {
  //       color: "green",
  //     },
  //     "& .MuiInput-underline:after": {
  //       borderBottomColor: "green",
  //     },
  //     "& .MuiOutlinedInput-root": {
  //       "& fieldset": {
  //         borderColor: "red",
  //       },
  //       "&:hover fieldset": {
  //         borderColor: "yellow",
  //       },
  //       "&.Mui-focused fieldset": {
  //         borderColor: "green",
  //       },
  //     },
  //   },
  // })(TextField);
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
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
            // "& .MuiInputBase-root": {
            //   border: "1px solid rgba(14, 14, 14, 0.08)",
            //   outline: "none",
            //   color: "rgba(14, 14, 14, 0.3)",
            //   opacity: "1",
            //   marginBottom: "20px",
            //   "& label.Mui-focused": {
            //     color: "green",
            //   },
            //   "& .MuiInputBase-input": {
            //     "&:focus": {
            //       color: "black",
            //       border: "1px solid black",
            //       outline: "none",
            //     },
            //     "&:hover": {
            //       border: "none",
            //       outline: "none",
            //     },
            //   },
            // },
          }}
        >
          {/* <CssTextField
            fullWidth
            id="fullWidth"
            label="телефон"
            //   defaultValue="+"
            type="tel"
            // label="Outlined secondary"
            // color="orange"
            // focused
          /> */}
          <TextField
            fullWidth
            label="email"
            id="fullWidth"
            // label="Outlined secondary"
            // color="orange"
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
          <TextField
            fullWidth
            label="пароль еще раз"
            id="fullWidth"
            type="password"
            // label="Outlined secondary"
            // color="orange"
            // focused
          />
        </Box>
        <button className="modal__btn">регистрация</button>
      </div>
      <div className="modal__footer">
        <p onClick={() => setChangeModal(true)}>у меня уже есть аккаунт</p>
      </div>
    </div>
  );
}
