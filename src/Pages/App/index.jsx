import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppinCartProvider } from "../../Context";
import Home from "@Pages/Home";
import { Navbar } from "../../Components/Navbar";
import All from "../All";
import MyOrders from "@Pages/MyOrders";
import MyOrder from "../MyOrder";
import MyAccount from "@Pages/MyAccount";
import NotFound from "@Pages/NotFound";
import SingIn from "@Pages/SingIn";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";
import "./idex.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/all", element: <All /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/singin", element: <SingIn /> },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
};

export default function App() {
  return (
    <>
      <ShoppinCartProvider>
        <BrowserRouter>
          <AppRoutes />
          <Navbar />
          <CheckoutSideMenu />
        </BrowserRouter>
      </ShoppinCartProvider>
    </>
  );
}
