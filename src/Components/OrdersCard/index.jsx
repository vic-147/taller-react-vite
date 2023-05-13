import { FiChevronRight } from "react-icons/fi";
import PropTypes from "prop-types";

const OrdersCard = (props) => {
  const { date, totalPrice, totalProducts } = props;

  OrdersCard.propTypes = {
    totalPrice: PropTypes.node.isRequired,
    totalProducts: PropTypes.node.isRequired,
    date: PropTypes.node.isRequired,
  };

  return (
    <div className="flex justify-between items-center mb-3 border border-black text-black p-2 w-80 rounded-lg  hover:bg-green-500 hover:border-green-500 hover:text-white">
      <div className="flex justify-between w-full">
        <p className="flex flex-col font-light">
          <span>{date}</span>
          <span>{totalProducts} articles</span>
        </p>

        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <FiChevronRight />
        </p>
      </div>
    </div>
  );
};

export { OrdersCard };
