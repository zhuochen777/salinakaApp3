import React from "react";
import "../css/Main.css";
import { useSelector } from "react-redux";
import Product from "./Product";
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import { setproductDetail } from "../store";
import { Button } from "@mui/material";


export default function Main() {
  const productList = useSelector((state) => state.shop.productList);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getDetailHandle = (item)=>{
    navigate(`/detail/${item.id}`)
    dispatch(setproductDetail(item))
  }

  const toShopHandle=()=>{
    navigate("/shop")
  }
  return (
    <>
      <main className="content" style={{paddingTop: 0}}>
        <div className="home">
          <div className="banner">
            <h1>See everything with Clarity</h1>
            <p>
              Buying eyewear should leave you happy and good-looking, with money
              in your pocket. Glasses, sunglasses, and contacts—we've got your
              eyes covered.
            </p>
            <br />
            <Button variant="contained" className="banner-btn" onClick={toShopHandle}>Shop Now {"->"}</Button>
          </div>
          <div className="banner-img">
          </div>
        </div>
        <div className="display">
          <div className="display-header">
            <h1>Featured Products</h1>
            <a href="/featured" className="featured-link">See All</a>
          </div>
          <div className="product-display">
            {productList.map((item) => (
              <div className="product-detail" key={item.id} onClick={()=>getDetailHandle(item)}><Product item={item}/></div>
            ))}
          </div>
        </div>
        <div className="display">
          <div className="display-header">
            <h1>Recommended Products</h1>
            <a href="/recommended" className="featured-link">See All</a>
          </div>
          <div className="product-display">
            {productList.map((item) => (
              <div className="product-detail" key={item.id} onClick={()=>getDetailHandle(item)}><Product item={item}/></div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
