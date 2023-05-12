import PropTypes from "prop-types";
import { FaRegTrashAlt } from "react-icons/fa";

const OrdersCard = (props) => {
  const { date, totalPrice, totalProducts } = props;

  OrdersCard.propTypes = {
    totalPrice: PropTypes.node.isRequired,
    totalProducts: PropTypes.node.isRequired,
    date: PropTypes.node.isRequired,
  };

  return (
    <div className="flex justify-between items-center mb-2 border border-black">
      <p>
        <span>{date}</span>
        <span>{totalPrice}</span>
        <span>{totalProducts}</span>
      </p>
    </div>
  );
};

export { OrdersCard };
