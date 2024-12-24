import React, { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import ProductInShop from "../component/ProductInShop";
import Nav from "../component/Nav";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setproductDetail } from "../store";
import "../css/Shop.css";
import useTitle from "../component/useTitle";
import Footer from "../component/Footer";
import { shopFilterContext } from "../App.js";

export default function Shop() {
  const shopList = useSelector((state) => state.shop.shopList);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [displayedProducts, setDisplayedProducts] = useState(shopList);
  const [showMoreButton, setShowMoreButton] = useState(true);
  const { selectFilter, setSelectFilter, filterFields, setFilterFields } =
    useContext(shopFilterContext);

  const getDetailHandle = (item) => {
    navigate(`/detail/${item.id}`);
    dispatch(setproductDetail(item));
  };

  const showMoreHandle = () => {
    setShowMoreButton(false);
    setDisplayedProducts(shopList);
  };

  const displayedFilterProducts = shopList
    .filter((item) => {
      if (filterFields.brand === "All Brands") {
        return shopList;
      } else {
        return item.summary === filterFields.brand;
      }
    })
    .filter((item) => {
      return item.price >= filterFields.valuePrice[0];
    })
    .filter((item) => {
      return item.price <= filterFields.valuePrice[1];
    });

  if (filterFields.sortBy === "Name Ascending A - Z") {
    displayedFilterProducts.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (filterFields.sortBy === "Name Ascending Z - A") {
    displayedFilterProducts.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      } else if (a.name < b.name) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (filterFields.sortBy === "Price High - Low") {
    displayedFilterProducts.sort((a, b) => {
      return b.price - a.price;
    });
  } else if (filterFields.sortBy === "Price Low - High") {
    displayedFilterProducts.sort((a, b) => {
      return a.price - b.price;
    });
  }

  useEffect(() => {
    if (selectFilter) {
      if (displayedFilterProducts.length > 12 && showMoreButton) {
        setDisplayedProducts(displayedFilterProducts.slice(0, 12));
      } else {
        if (displayedFilterProducts.length === 0 && showMoreButton) {
          setShowMoreButton(false);
        }
        setDisplayedProducts(displayedFilterProducts);
      }
    } else {
      if (shopList.length > 12 && showMoreButton) {
        setDisplayedProducts(shopList.slice(0, 12));
      } else {
        if (shopList.length === 0 && showMoreButton) {
          setShowMoreButton(false);
        }
        setDisplayedProducts(shopList);
      }
    }
  }, [shopList, showMoreButton, selectFilter, filterFields]);

  useTitle("Shop");
  return (
    <div>
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
    </div>
  );
}
