import React, { useState } from "react";
import Login from "./Login";
import Registration from "./Registration";

export default function Account() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <svg
        onClick={() => setIsOpen(true)}
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
      {isOpen && <Login setIsOpen={setIsOpen} />}
    </div>
  );
}
