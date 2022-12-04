import Link from "next/link";
import React, { useRef } from "react";
import toast from "react-hot-toast";
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from "react-icons/ai";
import{TiDeleteOutline} from 'react-icons/ti';
import { useStateContext } from "../context/StateContext";

import { urlFor } from "../lib/client";

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, decQty, qty } =
    useStateContext();
  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
          <span></span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => {
                  setShowCart(false);
                }}
                className="btn"
              >
                Continue shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item, i) => (
              <div key={i} className="product">
                <img
                  src={urlFor(item?.image[0])}
                  className="cart-product-image"
                />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>${item.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <div className="quantity">
                        <p className="quantity-desc">
                          <span className="minus">
                            <AiOutlineMinus />
                          </span>
                          <span className="num">0</span>
                          <span className="plus">
                            <AiOutlinePlus />
                          </span>
                        </p>
                      </div>
                    </div>
                      <button type="button" className="remove-item" onClick=""><TiDeleteOutline/></button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {
          cartItems.length >= 1 && (<div className="cart-bottom">
            <div className="total">
              <h3>Subtotal : </h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick="">
                Pay with Stripe
              </button>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default Cart;
