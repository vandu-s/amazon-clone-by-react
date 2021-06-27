import React from 'react';
import './Product.css'
import { useStateValue } from '../../StateProvider/StateProvider';


const Product = ({ id, title, image, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {

        //Add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }
    return (
        <div className="product">
            <p>{title}</p>
            <div className="product__info">
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}
                    </strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p>⭐</p>
                            ))
                    }
                </div>
            </div>
            <div className="product_info2">
                <img className="product_img" src={image} alt="prodcut_img" />
                <button className="btn" onClick={addToBasket}>Add to Basket</button>

            </div>

        </div>
    )
}

export default Product
