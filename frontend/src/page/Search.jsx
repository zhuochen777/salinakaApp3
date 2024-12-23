import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Nav from "../component/Nav";
import "../css/Search.css";
import ProductInShop from "../component/ProductInShop";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { setproductDetail } from "../store";

export default function Search() {
  const shopList = useSelector((state) => state.shop.shopList);
  const { searchInput } = useParams();
  const [filteredProducts, setFilteredProducts] = useState(shopList);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getSearchDetailHandle = (item) => {
    navigate(`/detail/${item.id}`);
    // dispatch(setproductDetail(item));
  };

  const getFilteredProducts = () => {
    const filtered = shopList.filter((item) =>
      item.name.toLowerCase().includes(searchInput.trim().toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    getFilteredProducts();
  }, [searchInput, shopList]);

  return (
    <>
      <Nav />
      <div className="search-content">
        <div className="search-list-header">
          <div className="search-list-header-title">
            {filteredProducts.length > 0 && (
              <h5>
                Found {filteredProducts.length} product with keyword{" "}
                {searchInput}
              </h5>
            )}
          </div>
        </div>
        {filteredProducts.length === 0 ? (
          <div className="loader">
            <h2>No product found.</h2>
          </div>
        ) : (
          <div className="search-list">
            {filteredProducts.map((item) => {
              return (
                <div
                  className="search-item"
                  key={item.id}
                  onClick={() => getSearchDetailHandle(item)}
                >
                  <div className="search-item-wrap">
                    <ProductInShop item={item} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
