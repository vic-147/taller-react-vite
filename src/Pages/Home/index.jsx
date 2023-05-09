import { useState, useEffect } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Card/inde";
import { ProductDetail } from "../../Components/PoriductDetial";
// deberi estar en una canrpeta de congiguracion aparte
const apiUrl = import.meta.env.VITE_API;

export default function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
}
