import React from "react";
import Nav from "../component/Nav";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setproductDetail } from "../store";
import Product from "../component/Product";
import useTitle from "../component/useTitle";
import "../css/Featured.css"
import Footer from "../component/Footer";

export default function Featured() {
  const productList = useSelector((state) => state.shop.productList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getDetailHandle = (item) => {
    navigate(`/detail/${item.id}`);
    dispatch(setproductDetail(item));
  };

  useTitle("Featured Products");
  return (
    <>
      <Nav />
      <div className="feature-display">
        <div className="feature-banner-wrapper">
          <div className="feature-banner">
            <h1>Featured Products</h1>
          </div>
          <div className="feature-banner-img"></div>
        </div>
        {/* <div className="display-header">
          <h1>Featured Products</h1>
          <a href="/featured" className="featured-link">
            See All
          </a>
        </div> */}
        <div className="product-display">
          {productList.map((item) => (
            <div
              className="product-detail"
              key={item.id}
              onClick={() => getDetailHandle(item)}
            >
              <Product item={item} />
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}
