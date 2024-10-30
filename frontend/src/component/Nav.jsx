import React, { useContext, useRef } from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined.js";
import "../css/Nav.css";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Drawer } from "@mui/material";
import Cart from "./Cart.jsx";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { isSignedinContext } from "../App.js";

export default function Nav() {
  let navigate = useNavigate();
  let userDropdownRef = useRef();
  const { isSignedin, setIsSignedin, signupInfo, setSignupInfo } =
    useContext(isSignedinContext);

  const [open, setOpen] = useState(false);
  const [navUserOpen, setNavUserOpen] = useState(false);

  const toggleDrawer = (flag) => {
    setOpen(flag);
  };

  const closeCartHandle = () => {
    setOpen(false);
  };

  const cartList = useSelector((state) => state.shop.cartList);

  const handleNavUser = () => {
    setNavUserOpen(!navUserOpen);
  };

  //logout with google github facebook signin
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  const signOutHandle = () => {
    localStorage.clear();
    setIsSignedin(false);
    setSignupInfo(null);
    logout();
    navigate("/signin");
  };

  //handle user info toogle, when click user avatar, info dropdown shows, then click outside of dropdown, dropdown closes
  useEffect(() => {
    if (isSignedin) {
      let userDropdownHandle = (e) => {
        if (!userDropdownRef.current.contains(e.target)) {
          setNavUserOpen(false);
        }
      };

      document.addEventListener("mousedown", userDropdownHandle);

      return () => {
        document.removeEventListener("mousedown", userDropdownHandle);
      };
    }
  });

  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img
            src="https://salinaka-ecommerce.web.app/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png"
            alt="logo"
          />
        </Link>
        <ul className="nav-option">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/featured">Featured</Link>
          </li>
          <li>
            <Link to="/recommended">Recommended</Link>
          </li>
        </ul>
        <div className="searchbar">
          <input
            className="search-input"
            type="text"
            placeholder="Search product..."
          />
        </div>
        <ul className="navigation-menu">
          <li className="navigation-menu-item">
            <button onClick={() => toggleDrawer(true)} className="cart-icon">
              <div className="badge">
                <span>
                  <Badge badgeContent={cartList.length} color="primary">
                    <ShoppingBagOutlinedIcon />
                  </Badge>
                </span>
                <span className="badge-count"></span>
              </div>
            </button>
          </li>
          {!isSignedin ? (
            <li className="navigation-action">
              <Link to="/signup">
                <button className="button signup">Sign Up</button>
              </Link>
              <Link to="/signin">
                <button className="button signin">Sign In</button>
              </Link>
            </li>
          ) : (
            <li className="user-nav" onClick={() => handleNavUser()}>
              <h5 className="user-name">
                {signupInfo.fullname
                  ? signupInfo.fullname
                  : signupInfo.displayName}
              </h5>
              <div className="user-nav-img-wrapper">
                <img
                  className="user-nav-img"
                  src={
                    signupInfo.photos
                      ? signupInfo.photos[0].value
                      : "https://salinaka-ecommerce.web.app/images/defaultAvatar.4e9edb2a624547982816014bf128fcd5.jpg"
                  }
                  alt="avatar"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="anticon-down">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="down"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                </svg>
              </span>
              <div
                className={
                  navUserOpen ? "user-nav-sub active" : "user-nav-sub inactive"
                }
                ref={userDropdownRef}
              >
                <Link className="user-nav-sub-link" to="/account">
                  View Account{" "}
                  <span className="anticon-account">
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="user"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
                    </svg>
                  </span>
                </Link>
                <div
                  className="user-nav-sub-link"
                  onClick={() => signOutHandle()}
                >
                  Sign Out{" "}
                  <span className="anticon-signout">
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="logout"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </li>
          )}
        </ul>
      </nav>
      <Drawer open={open} onClose={() => toggleDrawer(false)} anchor="right">
        <div style={{ width: "600px", padding: "10px" }}>
          <Cart closeCartHandle={closeCartHandle} />
        </div>
      </Drawer>
    </>
  );
}
