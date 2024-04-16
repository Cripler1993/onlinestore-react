import React, { useState } from "react";
import Registration from "./Registration";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function Login({ setIsOpen }) {
  const initialValues = { email: "ffff", password: "dddd" };
  const [changeModal, setChangeModal] = useState(true);
  const validationSchema = Yup.object().shape({
    email: Yup.string("введите корректный email")
      .email("введите корректный email")
      .required("введите email"),
    password: Yup.string("введите корректный пароль")
      .required("введите пароль")
      .min(6, "пароль слишком короткий")
      .max(30, "пароль слишком длинный"),
  });

  function handleSubmit(values) {
    console.log(values);
  }
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
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ values, isValid, dirty }) => {
            // console.log(values);
            return (
              <Form className="modal__inputs">
                <div className="form-item">
                  <Field name="email" id="email" type="text" required />
                  <label htmlFor="email">email</label>
                  <ErrorMessage
                    name="email"
                    component={"span"}
                    className="error"
                  />
                </div>
                <div className="form-item">
                  <Field
                    name="password"
                    id="password"
                    type="password"
                    required
                  />
                  <label htmlFor="password">пароль</label>
                  <ErrorMessage
                    name="password"
                    component={"span"}
                    className="error"
                  />
                </div>
                <button
                  disabled={!(dirty && isValid)}
                  className="modal__btn"
                  type="submit"
                >
                  войти
                </button>
              </Form>
            );
          }}
        </Formik>
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
