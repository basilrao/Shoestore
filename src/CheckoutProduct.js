import React,{useState} from 'react';
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider";

function CheckoutProduct({ id, title, price, rating, image }) {
    
    let [val,newval]=useState(1);
    let [nprice,newprice]=useState(price);

    const [{},dispatch]=useStateValue();
    const removeFromBasket = () =>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id: id,
         })

    }
    const incrementPrice=()=>{
        dispatch({
            type:'INCREMENTPRICE',
            inid: id,
            inprice: 30,
        })
    }
    const decrementPrice=()=>{
        dispatch({
            type:'DECREMENTPRICE',
            did: id,
            dprice: 30,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="cartimage" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{nprice}</strong>
                </p>
                <div className="checkoutProduct__rating">

                    {
                        Array(rating)
                            .fill()
                            .map((_) => {
                                return (
                                    <span role="img" aria-label="star">⭐</span>
                                )
                            })
                    }
                </div>
                <div className="checkoutProduct__quantity">
                    
                    <button className="checkoutProduct__button" onClick={()=>{
                        newval(val-1);
                        newprice(nprice-30);
                        decrementPrice();
                    }}>-</button>
                    <input className="checkoutProduct__text" type="number" value={val} />
                    <button className="checkoutProduct__button" onClick={()=>{
                        newval(val+1);
                        newprice(nprice+30);
                        
                        incrementPrice()
                    }}>+</button>

                </div>
                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
