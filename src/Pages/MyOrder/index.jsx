import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { ShoppinCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";

export default function MyOrder() {
  const context = useContext(ShoppinCartContext);
  // console.log(context.order.order?.slice(-1)[0]);

  return (
    <Layout>
      Ordenes a confirmar
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
