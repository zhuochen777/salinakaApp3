import { createContext, useState } from "react";
import "./App.css";
import routers from "./router";
import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";

export const isSignedinContext = createContext();
export const tabContext = createContext();
export const shippingContext = createContext();
export const shopFilterContext = createContext()

function App() {
  let url = process.env.REACT_APP_baseURL;
  // const shopList = useSelector((state) => state.shop.shopList);
  const element = useRoutes(routers);
  const [isSignedin, setIsSignedin] = useState(false);
  const [signupInfo, setSignupInfo] = useState(null);
  const [tab, setTab] = useState("home");
  const [shippingCost, setShippingCost] = useState(0);
  // const [displayedProducts, setDisplayedProducts] = useState(shopList);
  const [selectFilter, setSelectFilter] = useState(false)
  const [filterFields, setFilterFields] = useState({
    brand: "All Brands",
    sortBy: "None",
    valuePrice: [67,674]
  })

  return (
    <>
    <shopFilterContext.Provider value={{selectFilter, setSelectFilter, filterFields, setFilterFields}}>
      <shippingContext.Provider value={{ shippingCost, setShippingCost}}>
        <isSignedinContext.Provider
          value={{ isSignedin, setIsSignedin, signupInfo, setSignupInfo }}
        >
          <tabContext.Provider value={{ tab, setTab }}>
            {element}
          </tabContext.Provider>
        </isSignedinContext.Provider>
      </shippingContext.Provider>
      </shopFilterContext.Provider>
    </>
  );
}

export default App;
