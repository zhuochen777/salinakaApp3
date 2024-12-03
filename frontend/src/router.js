import Home from "./page/Home";
import Detail from "./page/Detail";
import Shop from "./page/Shop";
import Featured from "./page/Featured";
import Recommended from "./page/Recommended";
import Signup from "./page/Signup";
import Signin from "./page/Signin";
import Account from "./page/Account";
import CheckoutStep1 from "./page/CheckoutStep1";
import CheckoutStep2 from "./page/CheckoutStep2";
import CheckoutStep3 from "./page/CheckoutStep3";

let routers = [
  { path: "/", element: <Home /> },
  { path: "/detail/:id", element: <Detail /> },
  { path: "/shop", element: <Shop /> },
  { path: "/featured", element: <Featured /> },
  { path: "/recommended", element: <Recommended /> },
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Signin /> },
  { path: "/account", element: <Account /> },
  { path: "/checkout/step1", element: <CheckoutStep1 /> },
  { path: "/checkout/step2", element: <CheckoutStep2 /> },
  { path: "/checkout/step3", element: <CheckoutStep3 /> },
];

export default routers;
