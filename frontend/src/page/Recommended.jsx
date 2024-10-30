import React from 'react'
import Nav from '../component/Nav'
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { setproductDetail } from '../store';
import Product from '../component/Product';

export default function Recommended() {
    const productList = useSelector((state) => state.shop.productList);
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const getDetailHandle = (item)=>{
      navigate(`/detail/${item.id}`)
      dispatch(setproductDetail(item))
    }
  return (
    <>
    <Nav/>
    <div className="display">
          <div className="display-header">
            <h1>Recommended Products</h1>
            <a href="/featured" className="featured-link">See All</a>
          </div>
          <div className="product-display">
            {productList.map((item) => (
              <div className="product-detail" key={item.id} onClick={()=>getDetailHandle(item)}><Product item={item}/></div>
            ))}
          </div>
        </div>
    </>
  )
}

