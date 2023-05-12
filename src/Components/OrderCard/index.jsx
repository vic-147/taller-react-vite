import PropTypes from "prop-types";
import { FaRegTrashAlt } from "react-icons/fa";

const OrderCard = (props) => {
  const { id, title, imageURL, price, handleDelete } = props;
  let renderTrashIcon;
  if (handleDelete) {
    renderTrashIcon = (
      <FaRegTrashAlt
        onClick={() => handleDelete(id)}
        className="h-6 w-6 text-black-500 cursor-pointer"
      />
    );
  }

  OrderCard.propTypes = {
    id: PropTypes.node.isRequired,
    title: PropTypes.node.isRequired,
    imageURL: PropTypes.node.isRequired,
    price: PropTypes.node.isRequired,
    handleDelete: PropTypes.node.isRequired,
  };

  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageURL}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">{price}</p>
        {renderTrashIcon}
      </div>
    </div>
  );
};

export { OrderCard };
