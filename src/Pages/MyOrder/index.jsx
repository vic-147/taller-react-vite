import { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Components/Layout";
import { ShoppinCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";
import { FiChevronLeft } from "react-icons/fi";

export default function MyOrder() {
  const context = useContext(ShoppinCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === 'last') index = context.order?. length -1;
  
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <Link to={"/my-orders"} className="absolute left-0">
          <FiChevronLeft className="h-6 w-6 text-black-500 cursor-pointer" />
        </Link>
        <h1 className="font-medum text-xl">My order</h1>
      </div>
      <div className="flex flex-col w-80">
        {context.order?.[index]?.products.map((product) => (
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
