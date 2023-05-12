import { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Components/Layout";
import { ShoppinCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";
import { FiChevronLeft } from "react-icons/fi";

export default function MyOrder() {
  const context = useContext(ShoppinCartContext);
  // console.log(context.order.order?.slice(-1)[0]);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-6">
        <Link to={"/my-orders"} className="absolute left-0">
          <FiChevronLeft className="h-6 w-6 text-black-500 cursor-pointer" />
        </Link>
        <h1>Mi ordern</h1>
      </div>
      <div className="flex flex-col w-80">
        {context.order?.slice(-1)[0].products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageURL={product.images}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
}
