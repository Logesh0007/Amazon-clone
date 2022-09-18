import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({ id, title, desc, price, img, rating, width }) {
    const [{ basket }, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                img,
                price,
                rating
            }
        })
    }

    return (
        <div className='product' style={{ width: width }}>
            <div className="product__info">
                <h3 className='product__title'>{title}</h3>
                <p>{desc}</p>
                <p className="product__price">
                    <span>₹</span>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map(() => (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 200 194" fill="none">
                            <path d="M200 74H123.667L100 0L76.3333 74H0L61.6667 119.667L38.3333 193.333L100 147.667L161.667 193.333L138 119.333L200 74Z" fill="#FFC200" />
                        </svg>
                    ))}
                </div>
            </div>
            <img src={img} alt="product img" className='product__img'/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product