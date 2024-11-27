import React from "react";
import Nav from "../component/Nav";
import StepTracker from "../component/StepTracker";
import TextField from "@mui/material/TextField";

export default function CheckoutStep2() {
  return (
    <>
      <Nav />
      <div className="content">
        <StepTracker current={2} />
        <div className="checkout-step-2">
          <h3 className="text-center">Shipping Details</h3>
          <div className="checkout-shipping-wrapper">
            <div className="checkout-shipping-form">
              <div className="form-row1">
                <div className="form-row1-left">
                  <div className="shippinginfo">*Full Name</div>
                  <TextField
                    id="outlined-size-small"
                    //   defaultValue={
                    //     JSON.parse(localStorage.getItem("token")).fullname
                    //   }
                    size="medium"
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="form-row1-right">
                  <div className="shippinginfo">*Email Address</div>
                  <TextField
                    id="outlined-size-small"
                    // defaultValue={JSON.parse(localStorage.getItem("token")).email}
                    size="medium"
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </div>
              <div className="form-row2">
                <div className="form-row2-left">
                  <div className="shippinginfo">*Shipping Address</div>
                  <TextField
                    id="outlined-size-small"
                    defaultValue=""
                    size="medium"
                    placeholder="Enter Full Shipping Address"
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="form-row2-right">
                  <div className="shippinginfo">*Mobile Number</div>
                  <TextField
                    id="outlined-size-small"
                    defaultValue=""
                    size="medium"
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="shippingoption">
            <div className="shippingoption_title">Shipping Option</div>
            <div className="shippingoption_cost">
                
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
