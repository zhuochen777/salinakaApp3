import React from "react";
import Nav from "../component/Nav";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setproductDetail } from "../store";
import Product from "../component/Product";
import useTitle from "../component/useTitle";
import "../css/Recommended.css"

export default function Recommended() {
  const productList = useSelector((state) => state.shop.productList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getDetailHandle = (item) => {
    navigate(`/detail/${item.id}`);
    dispatch(setproductDetail(item));
  };

  useTitle("Recommended Products");
  return (
    <>
      <Nav />
      <div className="recommend-display">
      <div className="recommend-banner-wrapper">
          <div className="recommend-banner">
            <h1>Recommended Products</h1>
          </div>
          <div className="recommend-banner-img"></div>
        </div>
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
    </>
  );
}
