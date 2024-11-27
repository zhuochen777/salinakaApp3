import React, { useEffect, useState } from "react";
import Nav from "../component/Nav";
import StepTracker from "../component/StepTracker";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  setRemoveCartItem,
  AddQuantityToCart,
  SubQuantityToCart,
} from "../store";
import "../css/CheckoutStep1.css";
import ShopIcon from '@mui/icons-material/Shop';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";


export default function CheckoutStep1() {
  const cartList = useSelector((state) => state.shop.cartList);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [totalVal, setTotalVal] = useState(0);

  const addHandle = (item) => {
    dispatch(AddQuantityToCart(item));
  };
  const subHandle = (item) => {
    dispatch(SubQuantityToCart(item));
  };

  const removeHandle = (item) => {
    dispatch(setRemoveCartItem(item));
  };

  const onClickPrevious = () => {
    navigate("/")
  };

  const onClickNext = () => {
    navigate("/checkout/step2")
  };

  useEffect(() => {
    setTotalVal(
      cartList.reduce((pre, cur) => pre + cur.price * cur.quantity, 0)
    );
  }, [cartList]);


  return (
    <>
      <Nav />
      <div className="content">
        <StepTracker current={1} />
        <div className="checkout-step-1">
          <h3 className="text-center">Order Summary</h3>
          <span className="review">
            Review items in your basket.
          </span>
          <br />
          <div className="checkout-items">
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
                    <span className="quantity">
                      Quantity:&nbsp;{item.quantity}
                    </span>
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
                <button
                  className="close-btn"
                  onClick={() => removeHandle(item)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <br />
          <div className="basket-total">
            <p className="basket-total-title">Subtotal:</p>
            <h2 className="basket-total-amount">${totalVal}</h2>
          </div>
          <br />
          <div className="checkout-shipping-action">
          <button
            className="button button-muted"
            onClick={onClickPrevious}
            type="button"
          >
            <ShopIcon/>
            &nbsp;
            Continue Shopping
          </button>
          <button
            className="button"
            onClick={onClickNext}
            type="submit"
          >
            Next Step
            &nbsp;
            <ArrowForwardIcon/>
          </button>
        </div>
        </div>
      </div>
    </>
  );
}
