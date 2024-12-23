import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductInShop from "../component/ProductInShop";
import Nav from "../component/Nav";
import { useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { setproductDetail } from "../store";
import "../css/Shop.css";
import useTitle from "../component/useTitle";
import Footer from "../component/Footer";

export default function Shop() {
  const shopList = useSelector((state) => state.shop.shopList);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [displayedProducts, setDisplayedProducts] = useState(shopList);
  const [showMoreButton, setShowMoreButton] = useState(true);

  const getDetailHandle = (item) => {
    navigate(`/detail/${item.id}`);
    dispatch(setproductDetail(item));
  };

  const showMoreHandle = () => {
    setShowMoreButton(false);
    setDisplayedProducts(shopList)
  };

  useEffect(() => {
    if (shopList.length > 12 && showMoreButton) {
      setDisplayedProducts(shopList.slice(0,12));
    } else {
      setDisplayedProducts(shopList);
    }
  }, [shopList]);

  useTitle("Shop");
  return (
    <>
      <Nav />
      <div className="shop-content">
        <div className="shop-list">
          {displayedProducts.map((item) => (
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
        <div className="show-more">
          <button
            className={`show-more-btn ${showMoreButton ? "" : "inactive"}`}
            onClick={() => {
              showMoreHandle();
            }}
          >
            Show More Items
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
