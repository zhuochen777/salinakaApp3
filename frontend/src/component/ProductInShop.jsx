import React, { useEffect } from "react";
import "../css/ProductInShop.css";
import { useDispatch, useSelector } from "react-redux";
import CheckIcon from "@mui/icons-material/Check";
import {
  setRemoveCartItem,
  setProductList,
  setCartList,
  setShopList,
  setproductDetail,
} from "../store";
import { useNavigate } from "react-router-dom";

export default function ProductInShop(props) {
  const { name, summary, srcImg, isInCart, price, id } = props.item;
  // const productDetail = useSelector((state) => state.shop.productDetail);
  // const productList = useSelector((state) => state.shop.productList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeHandle = (e, item) => {
    e.stopPropagation()//用来阻止点击添加入购物车时跳转到商品详情页面
    // 因为Shop页面给每个ProductInShop组件加了onClick事件用来跳转到商品详情页面
    //防止子元素受父元素事件的影响
    dispatch(setRemoveCartItem(item));
  };

  const addHandle = (e, item) => {
    e.stopPropagation()//用来阻止点击添加入购物车时跳转到商品详情页面
    // 因为Shop页面给每个ProductInShop组件加了onClick事件用来跳转到商品详情页面
    const updatedProduct = {
      ...props.item,
      selectedColor: "black",
      isInCart: true,
    };
    dispatch(setproductDetail(updatedProduct));
    dispatch(setCartList(updatedProduct));
    dispatch(setShopList(updatedProduct));
    dispatch(setProductList(updatedProduct));
  };

  return (
    <div>
      {isInCart ? (
        <div
          className="product-item"
          style={{ border: "1px solid black", position: "relative" , height:"238px"}}
        >
          <div className="shop-img-box">
            <img className="shop-product-img" src={srcImg} alt="product-img" />
          </div>
          <div className="product-intro">
            <h2 className="product-name name">{name}</h2>
            <p className="product-summary">{summary}</p>
            <p className="item-price">${price}</p>
          </div>
          <div>
            <button
              className="remove-btn"
              onClick={(e) => removeHandle(e, props.item)}
            >
              Remove from basket
            </button>
          </div>
          <CheckIcon
            style={{
              color: "green",
              position: "absolute",
              top: "5px",
              right: "5px",
              fontSize: "20px",
            }}
          />
        </div>
      ) : (
        <div className="product-item">
          <div className="shop-img-box">
            <img className="shop-product-img" src={srcImg} alt="product-img" />
          </div>
          <div className="product-intro">
            <h2 className="product-name name">{name}</h2>
            <p className="product-summary">{summary}</p>
            <p className="item-price">${price}</p>
          </div>
          <div>
            <button
              className="add-btn"
              onClick={(e) => addHandle(e,props.item)}
            >
              Add to basket
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
