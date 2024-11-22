import React, { useEffect } from "react";
import Nav from "../component/Nav";
import { useSelector } from "react-redux";
import "../css/Detail.css";
import { redirect, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setproductDetail,
  setCartList,
  setShopList,
  setProductList,
} from "../store";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Snackbar,
} from "@mui/material";
import { setRemoveCartItem } from "../store";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import Product from "../component/Product";

export default function Detail() {
  const productDetail = useSelector((state) => state.shop.productDetail);
  const productList = useSelector((state) => state.shop.productList);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [open, setOpen] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(productDetail);
  const [showWarning, setShowWarning] = useState(false);

  const getDetailHandle = (item) => {
    navigate(`/detail/${item.id}`);
    dispatch(setproductDetail(item));
  };
  const goShopHandle = () => {
    navigate("/shop");
  };

  const editSizeHandle = (size) => {
    console.log("48????", size);

    setSize(size.target.value);
  };
  const editColorHandle = (index) => {
    setColor(productDetail.color[index]);
  };

  const updateHandle = () => {
    setUpdatedProduct({
      ...productDetail,
      size: size,
      selectedColor: color,
      isInCart: true,
    });
  };

  useEffect(() => {
    console.log("use effect updated Product", updatedProduct);

    updateHandle();
  }, [updatedProduct]);

  const addToCartHandle = () => {
    updateHandle();

    console.log(updatedProduct);

    const handleSelectedColorValidation = () => {
      console.log("color", updatedProduct);

      if (!updatedProduct.selectedColor) {
        setShowWarning(true);
        return false;
      }

      return true;
    };

    const handleSelectedSizeValidation = () => {
      console.log("size", updatedProduct);
      if (!updatedProduct.size) {
        setShowWarning(true);
        return false;
      }

      return true;
    };

    // if (handleSelectedColorValidation() && handleSelectedSizeValidation()) {
    if (handleSelectedSizeValidation() && handleSelectedColorValidation()) {
      console.log("yes");
      dispatch(setproductDetail(updatedProduct));
      dispatch(setCartList(updatedProduct));
      dispatch(setShopList(updatedProduct));
      dispatch(setProductList(updatedProduct));
      setOpen(true);
    } else {
      console.log("no");
    }

    // if (handleSelectedSizeValidation()) {
    //   if (handleSelectedColorValidation()) {
    //     console.log("yes");
    //     dispatch(setproductDetail(updatedProduct));
    //     dispatch(setCartList(updatedProduct));
    //     dispatch(setShopList(updatedProduct));
    //     dispatch(setProductList(updatedProduct));
    //     setOpen(true);
    //   } else {
    //     console.log("no color");
    //   }
    // } else {
    //   console.log("no size");
    // }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const removeHandle = (item) => {
    dispatch(setRemoveCartItem(item));
    setOpen(true);
  };

  return (
    <>
      <Nav />
      <div>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            Your action was successful.
          </Alert>
        </Snackbar>
      </div>
      <main>
        <div className="product-view">
          <h3 className="button-link" onClick={goShopHandle}>
            {"<- "}Back to shop
          </h3>
          <div className="product-modal">
            <div className="product-img-list">
              <div className="detail-product-img">
                {productDetail.srcImgs.map((item, index) => {
                  return (
                    <div className="product-img-container" key={index}>
                      <img
                        className={"img" + index + " img"}
                        src={item}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="product-img-wrapper">
              <img src={productDetail.srcImg} alt="" />
            </div>
            <div className="product-modal-details">
              <br />
              <span>{productDetail.summary}</span>
              <h1>{productDetail.name}</h1>
              <p>{productDetail.description}</p>
              {showWarning ? <p>Please select size and color</p> : <></>}
              <div>Lens Width and Frame Size</div>
              <div className="size-select">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    --Select Size--
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={size}
                    label="size"
                    onChange={editSizeHandle}
                  >
                    <MenuItem value={28}>28mm</MenuItem>
                    <MenuItem value={36}>36mm</MenuItem>
                    <MenuItem value={42}>42mm</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div>Choose Color</div>
              <ul className="color-list">
                {productDetail.color.map((item, index) => (
                  <li
                    key={index}
                    style={{ backgroundColor: item }}
                    className="color-option"
                    onClick={() => editColorHandle(index)}
                  >
                    {item === color ? (
                      <div className="select">
                        <CheckIcon />
                      </div>
                    ) : null}
                  </li>
                ))}
              </ul>
              <h1>${productDetail.price}</h1>
              <div className="product-modal-action">
                {productDetail.isInCart ? (
                  <Button
                    variant="contained"
                    className="basket-btn"
                    onClick={() => removeHandle(productDetail)}
                  >
                    Remove From Basket
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    className="basket-btn"
                    onClick={addToCartHandle}
                  >
                    Add To Basket
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="display" style={{ marginBottom: "70px" }}>
          <div className="display-header">
            <h1>Recommended Products</h1>
            <a href="/recommended" className="featured-link">
              See All
            </a>
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
      </main>
    </>
  );
}
