import { createContext, useState } from "react";
import PropTypes from "prop-types";

const ShoppinCartContext = createContext();

const ShoppinCartProvider = ({ children }) => {
  ShoppinCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const [count, setCount] = useState(0);

  return (
    <ShoppinCartContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </ShoppinCartContext.Provider>
  );
};

export { ShoppinCartProvider, ShoppinCartContext };
