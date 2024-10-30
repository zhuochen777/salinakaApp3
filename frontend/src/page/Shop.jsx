import React from "react";
import { useSelector } from "react-redux";
import ProductInShop from "../component/ProductInShop";
import Nav from "../component/Nav";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setproductDetail } from "../store";
import "../css/Shop.css";

export default function Shop() {
  const shopList = useSelector((state) => state.shop.shopList);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getDetailHandle = (item) => {
    navigate(`/detail/${item.id}`);
    dispatch(setproductDetail(item));
  };
  return (
    <>
      <Nav />
      <div className="shop-content">
        <div className="shop-list">
          {shopList.map((item) => (
            <div
              className="shop-item"
              key={item.id}
              onClick={() => getDetailHandle(item)}
            >
              <div className="shop-item-wrap">
                <ProductInShop item={item} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
