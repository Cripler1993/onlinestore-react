import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SkeletonFullProduct from "../components/SkeletonFullProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/slices/productReducer";
import {
  addItem,
  decreaseItemQuantity,
  selectCurrentCartItem,
} from "../redux/slices/cartReducer";

export default function FullProduct() {
  const [isOpenNutrition, setIsopenNutrition] = useState(false);
  const [isOpenConsist, setIsopenConsist] = useState(false);
  const { loading, product } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  const { id } = useParams();
  const cartItem = useSelector(selectCurrentCartItem(id));

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, []);

  function handleOpenNutrition() {
    setIsopenNutrition((prev) => !prev);
  }

  function handleOpenConsist() {
    setIsopenConsist((prev) => !prev);
  }
  return (
    <div className="container">
      {loading ? (
        <SkeletonFullProduct />
      ) : (
        <div className="full__product-row">
          <div className="full__product-left">
            <Swiper navigation={true} modules={[Navigation]}>
              {product.img.map(function (elem, index) {
                return (
                  <SwiperSlide key={index}>
                    <img src={elem} alt="" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="full__product-right">
            <div className="product__right-header">
              <Link className="product__right-link" to={`/`}>
                главная
              </Link>
              <p className="header__triangle"></p>
              <p>{product.name}</p>
            </div>
            <div className="product__right-title">
              <p>{product.name}</p>
              <p>{product.serving_size}</p>
            </div>
            <div className="product__right-description">
              <p>{product.description}</p>
            </div>
            <div
              onClick={handleOpenNutrition}
              className="product__right-nutritionFacts"
            >
              <p>пищевая ценность на 100 г</p>
              <p
                className={
                  !isOpenNutrition ? "triangle" : "triangle triangle__active"
                }
              ></p>
            </div>
            {isOpenNutrition && (
              <div className="nutrition__facts-full">
                <div className="nutrition__facts-item">
                  <p>калорийность</p>
                  <p>{product.nutrition_facts[0]}</p>
                </div>
                <div className="nutrition__facts-item">
                  <p>белки</p>
                  <p>{product.nutrition_facts[1]}</p>
                </div>
                <div className="nutrition__facts-item">
                  <p>жиры</p>
                  <p>{product.nutrition_facts[2]}</p>
                </div>
                <div className="nutrition__facts-item">
                  <p>углеводы</p>
                  <p>{product.nutrition_facts[3]}</p>
                </div>
              </div>
            )}
            <div onClick={handleOpenConsist} className="product__right-consist">
              <p>состав</p>
              <p
                className={
                  !isOpenConsist ? "triangle" : "triangle triangle__active"
                }
              ></p>
            </div>
            {isOpenConsist && (
              <div className="consist__full">{product.consist}</div>
            )}
            <div className="full__product-footer">
              {cartItem && (
                <div className="product__footer-counter">
                  <button
                    disabled={cartItem.count == 1}
                    onClick={() => dispatch(decreaseItemQuantity(product))}
                    className="order__left-btn"
                  >
                    <svg
                      width="24"
                      height="24"
                      fill="#000"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path stroke="#0E0E0E" d="M5 12h14"></path>
                    </svg>
                  </button>
                  <span>{cartItem.count}</span>
                  <button
                    onClick={() => dispatch(addItem(product))}
                    className="order__left-btn"
                  >
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5v14m-7-7h14"
                        stroke="#0E0E0E"
                        strokeWidth="1.5"
                      ></path>
                    </svg>
                  </button>
                </div>
              )}
              <div className="product__footer-btn">
                <button onClick={() => dispatch(addItem(product))}>
                  {!cartItem ? `${product.price}₽ в корзину` : `В корзинe`}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
