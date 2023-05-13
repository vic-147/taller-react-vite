import { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Components/Layout";
import { OrdersCard } from "../../Components/OrdersCard";
import { ShoppinCartContext } from "../../Context";

export default function MyOrders() {
  const context = useContext(ShoppinCartContext);

  return (
    <Layout>
      <div className="flex items-center justify-center w-80 mb-4">
        <h1 className="font-medum text-xl">Mis ordernes</h1>
      </div>
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            date={order.date.toLocaleDateString()}
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
}
