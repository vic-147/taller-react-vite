import { createContext, useState } from "react";
import PropTypes from "prop-types";

const ShoppinCartContext = createContext();

const ShoppinCartProvider = ({ children }) => {
  ShoppinCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const [count, setCount] = useState(0);
  
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  // modificadores produc ditail open/close
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  
  const [isCheckoutSideMneu, setIsCheckoutSideMneu] = useState(false);
  // modificadores produc ditail open/close
  const openCheckoutSideMenu = () => setIsCheckoutSideMneu(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMneu(false);

  // Show product detail
  const [showProductDetail, setShowProductDetail] = useState({});
  // carrito de compras
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <ShoppinCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        showProductDetail,
        setShowProductDetail,
        cartProducts,
        setCartProducts,
        isCheckoutSideMneu,
        openCheckoutSideMenu,
        closeCheckoutSideMenu
      }}
    >
      {children}
    </ShoppinCartContext.Provider>
  );
};

export { ShoppinCartProvider, ShoppinCartContext };
