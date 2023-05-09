import { useContext } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { ShoppinCartContext } from "../Context";

const Card = (data) => {
  const context = useContext(ShoppinCartContext);

  const ShowProduct = (productDetail) => {
    context.openProductDetail();
    context.setShowProductDetail(productDetail);
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => ShowProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.images[0]}
          alt={data.data.title}
        />
        <div
          className="absolute bottom-0 right-0 flex justify-center items-center rounded-full m-2"
          onClick={() => context.setCount(context.count + 1)}
        >
          <AiFillPlusCircle className="h-6 w-6 text-white cursor-pointer" />
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-lg font-light ml-2">{data.data.title}</span>
        <span className="text-lg font-medium mr-2">${data.data.price}</span>
      </p>
    </div>
  );
};

export { Card };
