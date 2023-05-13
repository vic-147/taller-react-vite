import { createContext, useEffect, useState } from "react";
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

  // Shopping cart - Order
  const [order, setOrder] = useState([]);

  // deberi estar en una canrpeta de congiguracion aparte
  const apiUrl = import.meta.env.VITE_API;

  // get products
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  //get product by title
  const [searchByTitle, setSearchByTitle] = useState(null);

  return (
    <ShoppinCartContext.Provider
      value={{
        items,
        setItems,
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
        closeCheckoutSideMenu,
        order,
        setOrder,
        searchByTitle,
        setSearchByTitle,
      }}
    >
      {children}
    </ShoppinCartContext.Provider>
  );
};

export { ShoppinCartProvider, ShoppinCartContext };
