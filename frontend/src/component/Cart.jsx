import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "../css/Cart.css";
import {
  setClearCart,
  setRemoveCartItem,
  AddQuantityToCart,
  SubQuantityToCart,
} from "../store";
import Button from "@mui/material/Button";

export default function Cart(props) {
  const cartList = useSelector((state) => state.shop.cartList);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const closeCartHandle = () => {
    props.closeCartHandle();
  };

  const addHandle = (item) => {
    dispatch(AddQuantityToCart(item));
  };
  const subHandle = (item) => {
    dispatch(SubQuantityToCart(item));
  };

  const removeHandle = (item) => {
    dispatch(setRemoveCartItem(item));
  };

  const [totalVal, setTotalVal] = useState(0);
  useEffect(() => {
    setTotalVal(
      cartList.reduce((pre, cur) => pre + cur.price * cur.quantity, 0)
    );
  }, [cartList]);

  const clearCartHandle = () => {
    dispatch(setClearCart());
  };
  return (
    <div>
      <div className="cart-top">
        <div className="title">
          <h2>My Basket</h2>
          <p>({cartList.length} item)</p>
        </div>
        <div className="cart-btn-top">
          <Button variant="outlined" onClick={closeCartHandle}>
            Close
          </Button>
          <Button variant="outlined" onClick={clearCartHandle}>
            Clear Basket
          </Button>
        </div>
      </div>
      <div className="all-cart-items">
        {cartList.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-btn">
              <button className="add-btn" onClick={() => addHandle(item)}>
                +
              </button>
              <button className="sub-btn" onClick={() => subHandle(item)}>
                -
              </button>
            </div>
            <div>
              <img src={item.srcImg} alt="img" style={{ width: "100px" }} />
            </div>
            <div className="cart-item-desc">
              <h4>{item.name}</h4>
              <div className="cart-item-detail">
                <span className="quantity">Quantity:&nbsp;{item.quantity}</span>
                <span className="size">Size:&nbsp;{item.size}</span>
                <div className="color">
                  <span>Color: </span>
                  <div
                    style={{
                      backgroundColor: item.selectedColor,
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginLeft: "10px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <p>${item.price * item.quantity}</p>
            <button className="close-btn" onClick={() => removeHandle(item)}>
              X
            </button>
          </div>
        ))}
      </div>
      <hr />
      <div className="cart-bottom">
        <div className="total">
          <div className="total-title">Subtotal Amout:</div>
          <h2>${totalVal}</h2>
        </div>
        <Button variant="outlined" className="checkout-btn" onClick={clearCartHandle}>
          Clear Basket
        </Button>
      </div>
    </div>
  );
}
