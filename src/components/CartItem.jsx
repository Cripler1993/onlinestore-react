import { useDispatch } from "react-redux";
import {
  addItem,
  decreaseItemQuantity,
  deleteItem,
} from "../redux/slices/cartReducer";

export default function CartItem({ elem }) {
  const dispatch = useDispatch();
  return (
    <div className="cart__order">
      <div className="order__left">
        <img src={elem.img[0]} alt="" />
        <div>
          <p>{elem.name}</p>
          <p className="order__left-text">{elem.serving_size}</p>
          <p className="order__left-text order__left-row">
            кол-во:
            <button
              disabled={elem.count == 1}
              onClick={() => dispatch(decreaseItemQuantity(elem))}
              className="order__left-btn"
            >
              -
            </button>
            <span>{elem.count}</span>
            <button
              onClick={() => dispatch(addItem(elem))}
              className="order__left-btn"
            >
              +
            </button>
          </p>
        </div>
      </div>
      <div className="order__right">
        <svg
          onClick={() => dispatch(deleteItem(elem))}
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
        <p>{elem.price * elem.count}₽</p>
      </div>
    </div>
  );
}
