import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/PoriductDetial";
import { ShoppinCartContext } from "../../Context";

export default function Home() {
  const context = useContext(ShoppinCartContext);

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems?.map((item) => (
        <Card key={item.id} data={item} />
      ));
    } else {
      return <p className="font-medium">Nothing to show :(</p>;
    }
  };

  return (
    <Layout>
      <input
        type="text"
        placeholder="Search a product"
        className="text-center rounded-lg border border-black w-80 mb-2 focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}
