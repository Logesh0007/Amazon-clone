import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, price, img, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id,
        });
    };
    return (
        <div className="checkoutProduct">
            <img src={img} alt="img" className="checkoutProduct__img" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map(() => (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="18"
                                viewBox="0 0 200 194"
                                fill="none"
                            >
                                <path
                                    d="M200 74H123.667L100 0L76.3333 74H0L61.6667 119.667L38.3333 193.333L100 147.667L161.667 193.333L138 119.333L200 74Z"
                                    fill="#FFC200"
                                />
                            </svg>
                        ))}
                </div>

                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
