import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import Header from "./Header";
import "./payment.css";
import { useStateValue } from "./StateProvider";
import { useStripe, CardElement, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  const navigate = useNavigate() 

  const stripe = useStripe();
  const elements = useElements();


  useEffect(() => {
    const getClientSecret = async()=>{
      const response = await axios.post(`/payments/create?total=${getBasketTotal(basket) * 100}`)
      setClientSecret(response.data.clientSecret)
    }

    getClientSecret()
  }, [basket]);

  const handlePayment = async (e) => {
    e.preventDefault();

    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    })
    .then(({paymentIntent}) => {
      setSucceeded(paymentIntent)
      setError(null)
      setProcessing(false)

      navigate('/orders')
    })
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <>
      <Header />

      <div className="payment">
        <div className="payment__container">
          <h1>
            Checkout - <Link to="/checkout">{basket?.length} item(s)</Link>
          </h1>

          <div className="payment__section">
            <div className="payment__title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
              <p>45, West car street,</p>
              <p>Virudhunagar,</p>
              <p>TamilNadu,</p>
              <p>India.</p>
            </div>
          </div>

          <div className="payment__section">
            <div className="payment__title">
              <h3>Review items and delivery</h3>
            </div>
            <div className="payment__items">
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  desc={item.desc}
                  price={item.price}
                  img={item.img}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>

          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment details</h3>
            </div>
            <div className="payment__details">
              <form onSubmit={handlePayment}>
                <CardElement onChange={handleChange} />

                <div className="payment__priceController">
                  <CurrencyFormat
                    renderText={(value) => <h3>Order Total: ₹ {value}</h3>}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                  />

                  <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                  </button>
                </div>

                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
