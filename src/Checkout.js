import React from 'react';
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct.js";
import "./Checkout.css"
import Subtotal from "./Subtotal.js";

function Checkout() {
    const [{basket}]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
           {basket?.length===0 ? (
               <div>
                   <h2>Your Shopping Cart Is Empty</h2>
               </div>
           ):(
               <div>
                   <h2 className="checkout__title">Your Shopping Cart</h2>
                   {basket.map(item=>{
                       return(
                       <CheckoutProduct
                       id={item.id}
                       title={item.title}
                       image={item.image}
                       price={item.price}
                       rating={item.rating}
                       />
                   )
                   })

                   }
               </div>
           )}
           </div>
           
               {basket.length > 0 &&(
                   <div className="checkout__right">
                       <Subtotal/>
                       

                   </div>
               )}
           
            
        </div>
    )
}

export default Checkout
