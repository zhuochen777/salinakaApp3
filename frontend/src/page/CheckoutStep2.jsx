import React, { useContext, useEffect, useState } from "react";
import Nav from "../component/Nav";
import StepTracker from "../component/StepTracker";
import TextField from "@mui/material/TextField";
import "../css/CheckoutStep2.css";
import CheckIcon from "@mui/icons-material/Check";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { isSignedinContext } from "../App.js";
import { shippingContext } from "../App.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function CheckoutStep2() {
  const cartList = useSelector((state) => state.shop.cartList);
  const { isSignedin, setIsSignedin, signupInfo, setSignupInfo } =
    useContext(isSignedinContext);
  const { shippingCost, setShippingCost } = useContext(shippingContext);
  const [shippingDetails, setShippingDetails] = useState({
    fullname: signupInfo.fullname || signupInfo.displayName,
    email: signupInfo.providerData[0].email || signupInfo.email,
    address: "",
    mobile: "",
  });
  const [addressLabel, setAddressLabel] = useState("* Shipping Address");
  const [mobileLabel, setMobileLabel] = useState("* Mobile Number");
  const [nameLabel, setNameLabel] = useState("* Full Name");
  const [emailLabel, setEmailLabel] = useState("* Email Address");

  const navigate = useNavigate();

  const shippingHandle = () => {
    shippingCost === 0 ? setShippingCost(50) : setShippingCost(0);
  };

  const subtotalPriceList = cartList.map((item) => {
    return item.price * item.quantity;
  });

  const initial_subtotalPrice = 0;

  const subtotalPrice = subtotalPriceList.reduce(
    (pre, cur) => pre + cur,
    initial_subtotalPrice
  );

  let totalprice = subtotalPrice + shippingCost;

  const changeHandle = (e) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
  };

  const nextHandle = () => {
    if (
      handleNameValidate() &&
      handleEmailValidate() &&
      handleAddressValidate() &&
      handleMobileValidate()
    ) {
      navigate("/checkout/step3");
    }
  };

  const handleNameValidate = () => {
    const { fullname } = shippingDetails;
    if (fullname.length === 0) {
      setNameLabel("Full name is required.");
      return false;
    } else if (fullname.length < 2) {
      setNameLabel("Full name must be at least 2 characters long.");
      return false;
    } else {
      setNameLabel("* Full Name");
    }
    return true;
  };

  const handleEmailValidate = () => {
    const { email } = shippingDetails;
    if (email.length === 0) {
      setEmailLabel("Email is required.");
      return false;
    } else if (email) {
      const emailPattern = /^\S+@\S+\.\S+$/;
      if (!emailPattern.test(email)) {
        setEmailLabel("Email is not valid.");
        return false;
      } else {
        setEmailLabel("* Email Address");
      }
    }
    return true;
  };

  const handleAddressValidate = () => {
    const { address } = shippingDetails;
    if (address.length === 0) {
      setAddressLabel("Shipping address is required.");
      return false;
    } else {
      setAddressLabel("* Shipping Address");
    }
    return true;
  };

  const handleMobileValidate = () => {
    const { mobile } = shippingDetails;
    if (mobile.length === 0) {
      setMobileLabel("Mobile number is required.");
      return false;
    } else {
      setMobileLabel("* Mobile Number");
    }
    return true;
  };

  useEffect(() => {
    handleNameValidate();
  }, [shippingDetails.fullname]);

  useEffect(() => {
    handleEmailValidate();
  }, [shippingDetails.email]);

  useEffect(() => {
    handleAddressValidate();
  }, [shippingDetails.address]);

  useEffect(() => {
    handleMobileValidate();
  }, [shippingDetails.mobile]);

  //初始化label name的useEffect放在最下面
  useEffect(() => {
    setAddressLabel("* Shipping Address");
    setMobileLabel("* Mobile Number");
    setNameLabel("* Full Name");
    setEmailLabel("* Email Address");
  }, []);

  return (
    <>
      <Nav />
      <div className="content">
        <StepTracker current={2} />
        <div className="checkout-step-2">
          <h3 className="text-center shippingDetails">Shipping Details</h3>
          <div className="checkout-shipping-wrapper">
            <div className="checkout-shipping-form">
              <div className="form-row1">
                <div className="form-row1-left">
                  <label
                    className={
                      nameLabel === "* Full Name"
                        ? "shippinginfo"
                        : "shippinginfowarning"
                    }
                  >
                    {nameLabel}
                  </label>
                  <TextField
                    id="outlined-size-small"
                    defaultValue={
                      signupInfo.fullname
                        ? signupInfo.fullname
                        : signupInfo.displayName
                    }
                    size="medium"
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                    name="fullname"
                    onChange={(e) => changeHandle(e)}
                  />
                </div>
                <div className="form-row1-right">
                  <label
                    className={
                      emailLabel === "* Email Address"
                        ? "shippinginfo"
                        : "shippinginfowarning"
                    }
                  >
                    {emailLabel}
                  </label>
                  <TextField
                    id="outlined-size-small"
                    defaultValue={
                      signupInfo.providerData[0].email || signupInfo.email
                    }
                    size="medium"
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                    name="email"
                    onChange={(e) => changeHandle(e)}
                  />
                </div>
              </div>
              <div className="form-row2">
                <div className="form-row2-left">
                  <label
                    className={
                      addressLabel === "* Shipping Address"
                        ? "shippinginfo"
                        : "shippinginfowarning"
                    }
                  >
                    {addressLabel}
                  </label>
                  <TextField
                    id="outlined-size-small"
                    defaultValue=""
                    size="medium"
                    placeholder="Enter Full Shipping Address"
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                    name="address"
                    onChange={(e) => changeHandle(e)}
                  />
                </div>
                <div className="form-row2-right">
                  <label
                    className={
                      mobileLabel === "* Mobile Number"
                        ? "shippinginfo"
                        : "shippinginfowarning"
                    }
                  >
                    {mobileLabel}
                  </label>
                  {/* <TextField
                    id="outlined-size-small"
                    defaultValue=""
                    size="medium"
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                    name="mobile"
                    onChange={(e) => changeHandle(e)}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  /> */}

                  <PhoneInput
                    country={"us"}
                    value={shippingDetails.mobile}
                    onChange={(phone) => setShippingDetails({ ...shippingDetails, mobile:phone })}
                  />
                </div>
              </div>
            </div>
            <div className="shippingoption">
              <div className="shippingoption_title">Shipping Option</div>
              <div className="shippingoption_cost">
                <div className="shippingcostBar" onClick={shippingHandle}>
                  <div className="isshipmentcost">
                    {shippingCost === 0 ? (
                      <div className="circle">
                        <CheckIcon />
                      </div>
                    ) : (
                      <div
                        className="circle"
                        style={{
                          backgroundColor: "black",
                          border: " 2px solid black",
                        }}
                      >
                        <CheckIcon />
                      </div>
                    )}
                    <div className="shipping_text">
                      International Shipping{" "}
                      <span className="text-subtitle">7-14 days</span>
                    </div>
                  </div>
                  <div className="shippingcost">$50.00</div>
                </div>
              </div>
            </div>
            <div className="cost_summary">
              <div className="shipping_internationalcost">
                <h3 className="shipping_internationalcost_title">
                  International Shipping:
                </h3>
                <h4 className="shipping_internationalcost_cost">
                  ${shippingCost}.00
                </h4>
              </div>
              <div className="shipping_currentsubtotal">
                <h3 className="shipping_internationalcost_title">Subtotal:</h3>
                <h4 className="shipping_internationalcost_cost">
                  ${subtotalPriceList}.00
                </h4>
              </div>
              <div className="shipping_total">
                <h3 className="shipping_internationalcost_title_total">
                  Total:
                </h3>
                <div className="finalprice">${totalprice}.00</div>
              </div>
            </div>
            <div className="checkout-shipping-action">
              <button
                className="button button-muted"
                onClick={() => navigate("/checkout/step1")}
                type="button"
              >
                <ArrowBackIcon />
                &nbsp; Go Back
              </button>
              <button
                className="button button-icon"
                type="button"
                onClick={nextHandle}
              >
                Next Step &nbsp;
                <ArrowForwardIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
