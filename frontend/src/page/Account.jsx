import React, { useEffect, useState,useContext } from "react";
import Nav from "../component/Nav";
import "../css/Account.css";
import { isSignedinContext } from "../App.js";

export default function Account() {
  const [tabContent, setTabContent] = useState("account");
  const { isSignedin, setIsSignedin, signupInfo, setSignupInfo } =
  useContext(isSignedinContext);

  const tabContentHandle = (content) => {
    setTabContent(content);
  };

  return (
    <div className="account-wrapper">
      <Nav />
      <div className="account-content">
        <div className="user-tab">
          <div className="user-tab-nav">
            <ul className="user-tab-menu">
              <li
                className={tabContent==="account"? "user-tab-item user-tab-active":"user-tab-item"}
                onClick={() => tabContentHandle("account")}
              >
                Account
              </li>
              <li
                className={tabContent==="wishList"? "user-tab-item user-tab-active":"user-tab-item"}
                onClick={() => tabContentHandle("wishList")}
              >
                My Wish List
              </li>
              <li
                className={tabContent==="orders"? "user-tab-item user-tab-active":"user-tab-item"}
                onClick={() => tabContentHandle("orders")}
              >
                My Orders
              </li>
            </ul>
          </div>
          <div className="user-tab-content">
            {tabContent === "account" && (
              <div className="user-profile">
                <div className="user-profile-banner">
                  <div className="user-profile-banner-wrapper">
                    <img
                      className="user-profile-banner-img"
                      src="https://salinaka-ecommerce.web.app/images/defaultBanner.accdc757f2c48d61f24c4fbcef2742fd.jpg"
                      alt="user-profile-banner-img"
                    />
                  </div>
                  <div className="user-profile-avatar-wrapper">
                    <img
                      className="user-profile-img"
                      src={
                        signupInfo.photos
                          ? signupInfo.photos[0].value
                          : "https://salinaka-ecommerce.web.app/images/defaultAvatar.4e9edb2a624547982816014bf128fcd5.jpg"
                      }
                      alt="avatar"
                    />
                  </div>
                  <button className="user-profile-edit">Edit Account</button>
                </div>
                <div className="user-profile-details">
                  <h2 className="user-profile-name"> {signupInfo.fullname
                  ? signupInfo.fullname
                  : signupInfo.displayName}</h2>
                  <span>Email</span>
                  <br />
                  <h5>{signupInfo.email
                  ? signupInfo.email
                  : signupInfo.emails[0].value}</h5>
                  <span>Address</span>
                  <br />
                  <h5 className="text-italic">Address not set</h5>
                  <span>Mobile</span>
                  <br />
                  <h5></h5>
                  <span>Date Joined</span>
                  <br />
                  <h5>{signupInfo.createdDate? signupInfo.createdDate: "5/24/2024"}</h5>
                </div>
              </div>
            )}
            {tabContent === "wishList" && (
              <div className="loader">
                <h3>My Wish List</h3>
                <strong>
                  <span className="text">You don't have a wish list</span>
                </strong>
              </div>
            )}
            {tabContent === "orders" && (
              <div className="loader">
                <h3>My Orders</h3>
                <strong>
                  <span className="text">You don't have any orders</span>
                </strong>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
