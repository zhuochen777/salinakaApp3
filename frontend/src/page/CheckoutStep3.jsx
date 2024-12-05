import React, { useEffect, useRef, useState, useContext } from "react";
import Nav from "../component/Nav";
import StepTracker from "../component/StepTracker";
import "../css/CheckoutStep3.css";
import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { shippingContext } from "../App.js";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import moment from "moment";

export default function CheckoutStep3() {
  const { shippingCost, setShippingCost } = useContext(shippingContext);
  const cartList = useSelector((state) => state.shop.cartList);
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState("credit");
  const [showWarning, setShowWarning] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    name: "",
    number: "",
    date: "",
    ccv: "",
  });
  // const [dateValue, setDateValue] = useState(dayjs(new Date()));
  const [dateValue, setDateValue] = useState(null);
  const [nameLabel, setNameLabel] = useState("* Name on Card");
  const [numberLabel, setNumberLabel] = useState("* Card Number");
  const [dateLabel, setDateLabel] = useState("* Expiry Date");
  const [ccvLabel, setCcvLabel] = useState("* CCV");

  const collapseSectionRef = useRef(null);
  const creditCheckboxRef = useRef(null);
  const outerContainerRef = useRef(null);
  const cardNameInputRef = useRef(null);

  const toggleCollapse = () => {
    const oc = outerContainerRef.current;
    const cc = creditCheckboxRef.current;
    const cs = collapseSectionRef.current;
    const cni = cardNameInputRef.current;

    if (oc && cc && cs) {
      if (selectedPayment === "credit") {
        cni.focus();
        oc.style.height = `${cc.offsetHeight + cs.offsetHeight}px`;
      } else {
        cni.blur();
        oc.style.height = `${cc.offsetHeight}px`;
      }
    }
  };

  const creditModeHandle = () => {
    toggleCollapse();
  };

  const submitHandle = () => {
    if (
      handleNameValidate() &&
      handleNumberValidate() &&
      handleDateValidate() &&
      handleCcvValidate()
    ) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  };

  const closeWarningHandle = () => {
    setShowWarning(false);
  };

  const subtotalPriceList = cartList.map((item) => {
    return item.price * item.quantity;
  });

  const initial_subtotalPrice = 0;

  const subtotalPrice = subtotalPriceList.reduce(
    (pre, cur) => pre + cur,
    initial_subtotalPrice
  );

  const selectPaypal = () => {
    setSelectedPayment("paypal");
    setShowWarning(true);
  };

  useEffect(() => {
    toggleCollapse();
  }, [selectedPayment]);

  const changeHandle = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handleNewDate = (newDateValue) => {
    setDateValue(newDateValue);
    let formattedDate = moment(newDateValue).format("MM/DD/YYYY");
    setPaymentDetails({ ...paymentDetails, date: formattedDate });
  };

  const handleNameValidate = () => {
    const { name } = paymentDetails;
    if (name.length === 0) {
      setNameLabel("Name is required.");
      return false;
    } else if (name.length < 4) {
      setNameLabel("Name should be at least 4 characters.");
      return false;
    } else {
      setNameLabel("* Name on Card");
    }
    return true;
  };

  const handleNumberValidate = () => {
    const { number } = paymentDetails;
    if (number.length === 0) {
      setNumberLabel("Card number is required.");
      return false;
    } else if (number.length < 13 || number.length > 19) {
      setNumberLabel("Card number should be 13-19 digits long");
    } else {
      setNumberLabel("* Card Number");
    }
    return true;
  };

  const handleDateValidate = () => {
    const { date } = paymentDetails;
    if (date.length === 0) {
      setDateLabel("Credit card expiry is required.");
      return false;
    } else {
      setDateLabel("* Expiry Date");
    }
    return true;
  };

  const handleCcvValidate = () => {
    const { ccv } = paymentDetails;
    if (ccv.length === 0) {
      setCcvLabel("CCV is required.");
      return false;
    } else if (ccv.length < 3 || ccv.length > 4) {
      setCcvLabel("CCV length should be 3-4 digit");
    } else {
      setCcvLabel("* CCV");
    }
    return true;
  };

  useEffect(() => {
    handleNameValidate();
  }, [paymentDetails.name]);

  useEffect(() => {
    handleNumberValidate();
  }, [paymentDetails.number]);

  useEffect(() => {
    handleDateValidate();
  }, [paymentDetails.date]);

  useEffect(() => {
    handleCcvValidate();
  }, [paymentDetails.ccv]);

  //初始化label name的useEffect放在最下面
  useEffect(() => {
    setNameLabel("* Name on Card");
    setNumberLabel("* Card Number");
    setDateLabel("* Expiry Date");
    setCcvLabel("* CCV");
  }, []);

  return (
    <>
      <Nav />
      <div className="content">
        <StepTracker current={3} />
        <div className="checkout-step-3">
          <h3 className="text-center">Payment</h3>
          <br />
          <span className="option-title">Payment Option</span>
          <div
            className={`checkout-fieldset-collapse ${
              selectedPayment === "credit" ? "is-selected-payment" : ""
            }`}
            ref={outerContainerRef}
          >
            <div className="checkout-field">
              <div className="checkout-checkbox-field" ref={creditCheckboxRef}>
                <label
                  className="payment-desc"
                  onClick={() => setSelectedPayment("credit")}
                >
                  <div
                    className={`checkbox ${
                      selectedPayment === "credit" ? "payment-selected" : ""
                    }`}
                    onChange={creditModeHandle}
                  >
                    <CheckIcon
                      className={`check-icon ${
                        selectedPayment === "credit" ? "icon-selected" : ""
                      }`}
                    />
                  </div>
                  <div className="label-left">
                    <h4 className="payment-type">Credit Card</h4>
                    <span className="text-subtitle">
                      Pay with Visa, Master Card and other debit or credit card
                    </span>
                  </div>
                  <div className="label-right">
                    <div className="payment-img payment-img-visa"></div>
                    &nbsp;
                    <div className="payment-img payment-img-master"></div>
                  </div>
                </label>
              </div>
            </div>
            <div className="checkout-collapse-sub" ref={collapseSectionRef}>
              <span className="accepted-cards">Accepted Cards</span>
              <div className="checkout-cards-accepted">
                <div className="payment-img payment-img-visa" />
                <div className="payment-img payment-img-express" />
                <div className="payment-img payment-img-master" />
                <div className="payment-img payment-img-maestro" />
                <div className="payment-img payment-img-discover" />
              </div>
              <br />
              <div className="checkout-field-section">
                <div className="checkout-fieldset">
                  <div className="checkout-field-sub">
                    <label
                      className={
                        nameLabel === "* Name on Card"
                          ? "paymentinfo"
                          : "paymentinfowarning"
                      }
                    >
                      {nameLabel}
                    </label>
                    <TextField
                      id="outlined-size-small"
                      size="medium"
                      sx={{
                        width: "100%",
                        height: "100%",
                      }}
                      name="name"
                      inputRef={cardNameInputRef}
                      onChange={(e) => changeHandle(e)}
                    />
                  </div>
                  <div className="checkout-field-sub">
                    <label
                      className={
                        numberLabel === "* Card Number"
                          ? "paymentinfo"
                          : "paymentinfowarning"
                      }
                    >
                      {numberLabel}
                    </label>
                    <TextField
                      id="outlined-size-small"
                      size="medium"
                      sx={{
                        width: "100%",
                        height: "100%",
                      }}
                      name="number"
                      onChange={(e) => changeHandle(e)}
                    />
                  </div>
                </div>
                <div className="checkout-fieldset">
                  <div className="checkout-field-sub">
                    <label
                      className={
                        dateLabel === "* Expiry Date"
                          ? "paymentinfo"
                          : "paymentinfowarning"
                      }
                    >
                      {dateLabel}
                    </label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DatePicker"]}>
                        <DatePicker
                          sx={{
                            width: "100%",
                            height: "100%",
                          }}
                          value={dateValue}
                          onChange={(newDateValue) =>
                            handleNewDate(newDateValue)
                          }
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                  <div className="checkout-field-sub">
                    <label
                      className={
                        ccvLabel === "* CCV"
                          ? "paymentinfo"
                          : "paymentinfowarning"
                      }
                    >
                      {ccvLabel}
                    </label>
                    <TextField
                      id="outlined-size-small"
                      size="medium"
                      sx={{
                        width: "100%",
                        height: "100%",
                      }}
                      name="ccv"
                      onChange={(e) => changeHandle(e)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`checkout-fieldset-collapse ${
              selectedPayment === "paypal" ? "is-selected-payment" : ""
            }`}
          >
            <div className="checkout-field">
              <div className="checkout-checkbox-field">
                <label className="payment-desc" onClick={selectPaypal}>
                  <div
                    className={`checkbox ${
                      selectedPayment === "paypal" ? "payment-selected" : ""
                    }`}
                  >
                    <CheckIcon
                      className={`check-icon ${
                        selectedPayment === "paypal" ? "icon-selected" : ""
                      }`}
                    />
                  </div>
                  <div className="label-left">
                    <h4 className="payment-type">PayPal</h4>
                    <span className="text-subtitle">
                      Pay easily, fast and secure with PayPal.
                    </span>
                  </div>
                  <div className="label-right">
                    <div className="payment-img payment-img-paypal"></div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="basket-total">
            <p className="basket-total-title">Total:</p>
            <h2 className="basket-total-amount">
              ${subtotalPrice + shippingCost}.00
            </h2>
          </div>
          <br />
          <div className="checkout-shipping-action">
            <button
              className="button button-muted"
              onClick={() => navigate("/checkout/step2")}
              type="button"
            >
              <ArrowBackIcon />
              &nbsp; Go Back
            </button>
            <button
              className="button button-icon"
              type="button"
              onClick={submitHandle}
            >
              <CheckIcon />
              Next Step &nbsp;
            </button>
          </div>
        </div>
      </div>
      <Snackbar
        open={showWarning}
        autoHideDuration={5000}
        onClose={closeWarningHandle}
      >
        <Alert severity="warning">Feature not ready yet.</Alert>
      </Snackbar>
    </>
  );
}
