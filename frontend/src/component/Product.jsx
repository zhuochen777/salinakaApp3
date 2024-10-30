import React, { useEffect } from "react";
import "../css/Product.css";
import { useSelector } from "react-redux";
import CheckIcon from '@mui/icons-material/Check';

export default function Product(props) {
  const { name, summary, srcImg, isInCart } = props.item;

  return (
    <>
      {isInCart ? (
        <div className="product-item" style={{ border: "1px solid black" , position: "relative"}}>
          <div className="img-box">
            <img className="product-img" src={srcImg} alt="product-img" />
          </div>
          <div className="product-intro">
            <h2>{name}</h2>
            <p>{summary}</p>
          </div>
          <CheckIcon style={ {color: "green" , position: "absolute", top: "20px", right: "20px", fontSize: "30px"}}/>
        </div>
      ) : (
        <div className="product-item">
          <div className="img-box">
            <img className="product-img" src={srcImg} alt="product-img" />
          </div>
          <div className="product-intro">
            <h2>{name}</h2>
            <p>{summary}</p>
          </div>
        </div>
      )}
    </>
  );
}
