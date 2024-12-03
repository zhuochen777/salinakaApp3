import { createContext, useEffect, useState } from "react";
import "./App.css";
import routers from "./router";
import { useRoutes } from "react-router-dom";

export const isSignedinContext = createContext();
export const tabContext = createContext();
export const shippingContext = createContext();

function App() {
  let url = process.env.REACT_APP_baseURL;
  const element = useRoutes(routers);
  const [isSignedin, setIsSignedin] = useState(false);
  const [signupInfo, setSignupInfo] = useState(null);
  const [tab, setTab] = useState("home");
  const [shippingCost, setShippingCost] = useState(0);

  return (
    <>
      <shippingContext.Provider value={{ shippingCost, setShippingCost}}>
        <isSignedinContext.Provider
          value={{ isSignedin, setIsSignedin, signupInfo, setSignupInfo }}
        >
          <tabContext.Provider value={{ tab, setTab }}>
            {element}
          </tabContext.Provider>
        </isSignedinContext.Provider>
      </shippingContext.Provider>
    </>
  );
}

export default App;
