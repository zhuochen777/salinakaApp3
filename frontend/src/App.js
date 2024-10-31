import { createContext, useEffect, useState } from "react";
import "./App.css";
import routers from "./router";
import { useRoutes } from "react-router-dom";

export const isSignedinContext = createContext();

function App() {
  let url = process.env.REACT_APP_baseURL;
  const element = useRoutes(routers);
  const [isSignedin, setIsSignedin] = useState(false);
  const [signupInfo, setSignupInfo] = useState(null);

  
  console.log(signupInfo);
  
  return (
    <>
      <isSignedinContext.Provider
        value={{ isSignedin, setIsSignedin, signupInfo, setSignupInfo }}
      >
        {element}
      </isSignedinContext.Provider>
    </>
  );
}

export default App;
