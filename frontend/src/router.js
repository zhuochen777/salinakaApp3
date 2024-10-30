import Home from "./page/Home";
import Detail from "./page/Detail";
import Shop from "./page/Shop";
import Featured from "./page/Featured";
import Recommended from "./page/Recommended";
import Signup from "./page/Signup";
import Signin from "./page/Signin";
import Account from "./page/Account";

let routers = [
  { path: "/", element: <Home /> },
  { path: "/detail/:id", element: <Detail /> },
  { path: "/shop", element: <Shop /> },
  { path: "/featured", element: <Featured /> },
  { path: "/recommended", element: <Recommended /> },
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Signin /> },
  { path: "/account", element: <Account /> },
];

export default routers;
