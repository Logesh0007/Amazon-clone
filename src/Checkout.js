import React from 'react'
import SubTotal from './SubTotal'
import './Checkout.css'
import './SubTotal.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Header from './Header'

function Checkout() {
  const [{ basket }, dispatch] = useStateValue()

  return (
    <>
      <Header />
      <div className='checkout'>
        {/* <div className="checkout__left">
            <img src="https://wp.disruptiveadvertising.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png" alt="" className=''/>
        </div> */}

        <div className='checkout__info'>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket.map(item => (
            <CheckoutProduct id={item.id} img={item.img} title={item.title} price={item.price} rating={item.rating} />
          ))}
        </div>

        <div className="checkout__right">
          <SubTotal />
        </div>

      </div>
    </>
  )
}

export default Checkout