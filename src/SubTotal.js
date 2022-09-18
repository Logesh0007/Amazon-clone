import React from "react";
import CurrencyFormat from "react-currency-format";
import './SubTotal.css'
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import { useNavigate } from 'react-router-dom'

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue()
  const navigate = useNavigate()

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) : <strong>₹ {value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" name='gift' id='gift'/>
              <label htmlFor="gift">This order contains a gift</label>
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
      />

      <button onClick={()=> navigate('/payment')}>Proceed to checkout</button>
    </div>
  );
}

export default SubTotal;
