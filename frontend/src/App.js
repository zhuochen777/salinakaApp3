import { createContext, useEffect, useState } from "react";
import "./App.css";
import routers from "./router";
import { useRoutes } from "react-router-dom";

export const isSignedinContext = createContext();

function App() {
  const element = useRoutes(routers);
  const [isSignedin, setIsSignedin] = useState(false);
  const [signupInfo, setSignupInfo] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((res) => {
          if (res.status === 200) {
            return res.json();
            
          }
          throw new Error("Authentication has been failed");
        })
        .then((resObject) => {
          setSignupInfo(resObject.user);
          setIsSignedin(true)     
        })
        .catch((err) => {
          console.log(err);
        });
      };
      getUser();   
      
    }, []);
    

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
