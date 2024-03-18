import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import React from "react";

export default function CartSnackBar({ isOpen, setIsOpen }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsOpen(false);
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
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
            fill="lightgrey"
          ></path>
        </svg>
      </IconButton>
    </React.Fragment>
  );

  return (
    <Snackbar
      message="Товар добавлен в корзину"
      autoHideDuration={1500}
      open={isOpen}
      onClose={handleClose}
      action={action}
    ></Snackbar>
  );
}
