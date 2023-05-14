import { useContext } from "react";
import { Link } from "react-router-dom";
import { FiXCircle } from "react-icons/fi";
import { ShoppinCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../utils";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppinCartContext);

  // console.log(context.showProductDetail);
  // console.log('carro: ', context.cartProducts);
  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderTotal = {
      date: new Date(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderTotal]);
    context.setCartProducts([]);
    context.setSearchByTitle(null);
    context.closeCheckoutSideMenu();
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMneu ? "flex" : "hidden"
      } flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] bottom-4`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Orders</h2>
        <div>
          <div onClick={() => context.closeCheckoutSideMenu()}>
            <FiXCircle className="h-6 w-6 text-black-500 cursor-pointer hover:text-red-500" />
          </div>
        </div>
      </div>

      <div className="px-6 overflow-y-scroll flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageURL={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      <div className="px-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-medium">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to={"/my-orders/last"}>
          <button
            className="text-black text-2xl border border-black w-full mb-6 py-2 rounded-lg hover:bg-green-500 hover:border-green-500 hover:text-white"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export { CheckoutSideMenu };
