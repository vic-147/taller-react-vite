import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ShoppinCartContext = createContext();

// deberi estar en una canrpeta de congiguracion aparte
const apiUrl = import.meta.env.VITE_API;

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

  // get products
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  //get product by title
  const [searchByTitle, setSearchByTitle] = useState(null);
  const [searchByCategory, setSearchByCategory] = useState(null);

  const filteredItemsByTitle = (items) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle?.toLowerCase())
    );
  };

  // filtered by category
  const filteredItemsByCategory = (items) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory?.toLowerCase())
    );
  };

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchByTitle);
    } else if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory);
    } else if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item?.title.toLowerCase().includes(searchByTitle?.toLowerCase())
      );
    }
    return items;
  };

  useEffect(() => {
    if (searchByTitle && searchByCategory)
      setFilteredItems(
        filteredItemsByTitle(
          filterBy(
            "BY_TITLE_AND_CATEGORY",
            items,
            searchByTitle,
            searchByCategory
          )
        )
      );
    if (searchByTitle && !searchByCategory)
      setFilteredItems(
        filteredItemsByTitle(
          filterBy("BY_TITLE", items, searchByTitle, searchByCategory)
        )
      );
    if (!searchByTitle && searchByCategory)
      setFilteredItems(
        filteredItemsByTitle(
          filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory)
        )
      );
    if (!searchByTitle && !searchByCategory)
      setFilteredItems(
        filteredItemsByTitle(
          filterBy(null, items, searchByTitle, searchByCategory)
        )
      );
  }, [items, searchByTitle, searchByCategory]);

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
        filteredItems,
        setFilteredItems,
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppinCartContext.Provider>
  );
};

export { ShoppinCartProvider, ShoppinCartContext };
