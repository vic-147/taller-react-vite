import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "@Pages/Home";
import { Navbar } from "../../Components/Navbar";
import MyOrder from "@Pages/MyOrder";
import MyOrders from "@Pages/MyOrders";
import MyAccount from "@Pages/MyAccount";
import NotFound from "@Pages/NotFound";
import SingIn from "@Pages/SingIn";
import "./idex.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/singin", element: <SingIn /> },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
};

export default function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </>
  );
}
