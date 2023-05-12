import { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Components/Layout";
import { OrdersCard } from "../../Components/OrdersCard";
import { ShoppinCartContext } from "../../Context";

export default function MyOrders() {
  const context = useContext(ShoppinCartContext);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80">
        <h1>Mis ordernes</h1>
      </div>
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${order.id}`}>
          <OrdersCard
            date={order.date.getFullYear()}
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
}
