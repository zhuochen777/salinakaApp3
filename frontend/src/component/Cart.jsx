import React, { useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "../css/Cart.css";
import {
  setClearCart,
  setRemoveCartItem,
  AddQuantityToCart,
  SubQuantityToCart,
  setproductDetail,
} from "../store";
import Button from "@mui/material/Button";
import { isSignedinContext } from "../App.js";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Cart(props) {
  const cartList = useSelector((state) => state.shop.cartList);
  const productDetail = useSelector((state) => state.shop.productDetail);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [totalVal, setTotalVal] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const { isSignedin, setIsSignedin, signupInfo, setSignupInfo } =
    useContext(isSignedinContext);

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

  const clearCartHandle = () => {
    dispatch(setClearCart());
  };

  const handleModalOpen = () => setModalOpen(true);

  const handleModalClose = () => setModalOpen(false);

  const checkoutHandle = () => {
    if (cartList.length != 0 && isSignedin) {
      navigate("/checkout/step1");
    } else {
      handleModalOpen();
    }
  };

  const onSignInClick = () => {
    handleModalClose();
    closeCartHandle();
    navigate("/signin");
  };

  const checkProductHandle = (item) => {
    navigate(`/detail/${item.id}`);

    let itemNoSizeNoColor = { ...item, size: "", selectedColor: "" };
    console.log(itemNoSizeNoColor);

    dispatch(setproductDetail(itemNoSizeNoColor));
    closeCartHandle();
  };

  useEffect(() => {
    setTotalVal(
      cartList.reduce((pre, cur) => pre + cur.price * cur.quantity, 0)
    );
  }, [cartList]);

  return (
    <div style={{ height: "100%" }}>
      <div className="cart-wrapper">
        <div className="cart-top">
          <div className="title">
            <h2>My Basket</h2>
            <p>({cartList.length} item)</p>
          </div>
          <div className="cart-btn-top">
            <Button className="close-btn" variant="outlined" onClick={closeCartHandle}>
              Close
            </Button>
            {cartList.length === 0 ? (
              <Button className="clear-btn disabled-btn" variant="outlined" disabled>
                Clear Basket
              </Button>
            ) : (
              <Button variant="outlined" onClick={clearCartHandle}>
                Clear Basket
              </Button>
            )}
          </div>
        </div>
        <div className="all-cart-items">
          {cartList.length <= 0 && (
            <div className="basket-empty">
              <h5 className="basket-empty-msg">Your basket is empty</h5>
            </div>
          )}
          {cartList.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-btn">
                <button className="add-btn" onClick={() => addHandle(item)}>
                  +
                </button>
                <button
                  className="sub-btn"
                  onClick={() => subHandle(item)}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
              </div>
              <div>
                <img src={item.srcImg} alt="img" style={{ width: "100px" }} />
              </div>
              <div className="cart-item-desc">
                <span
                  className="cart-item-desc-link"
                  onClick={() => checkProductHandle(item)}
                >
                  <h4>{item.name}</h4>
                </span>
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
          {cartList.length === 0 ? (
            <Button className="checkout-btn disabled-btn" variant="outlined" disabled>
              Check Out
            </Button>
          ) : (
            <Button
              variant="outlined"
              className="checkout-btn"
              onClick={checkoutHandle}
            >
              Check Out
            </Button>
          )}
        </div>
        <Modal
          open={modalOpen}
          onClose={handleModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <p className="text-center">
              You must sign in to continue checking out
            </p>
            <br />
            <div className="d-flex-center">
              <button
                className="button-close"
                onClick={handleModalClose}
                type="button"
              >
                Continue shopping
              </button>
              &nbsp;
              <button
                className="button-signin"
                onClick={onSignInClick}
                type="button"
              >
                Sign in to checkout
              </button>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
