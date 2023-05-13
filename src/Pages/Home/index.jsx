import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/PoriductDetial";
import { ShoppinCartContext } from "../../Context";

export default function Home() {
  const context = useContext(ShoppinCartContext);

  return (
    <Layout>
      <input
        type="text"
        placeholder="Search a product"
        className="text-center rounded-lg border border-black w-80 mb-2 focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {context.items?.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
}
