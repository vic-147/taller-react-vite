import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppinCartProvider } from "../../Context";
import Home from "@Pages/Home";
import { Navbar } from "../../Components/Navbar";
import All from "../All";
import MyOrder from "@Pages/MyOrder";
import MyOrders from "@Pages/MyOrders";
import MyAccount from "@Pages/MyAccount";
import NotFound from "@Pages/NotFound";
import SingIn from "@Pages/SingIn";
import "./idex.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/all", element: <All /> },
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
      <ShoppinCartProvider>
        <BrowserRouter>
          <AppRoutes />
          <Navbar />
        </BrowserRouter>
      </ShoppinCartProvider>
    </>
  );
}
