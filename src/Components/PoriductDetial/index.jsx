import { useContext } from "react";
import { ShoppinCartContext } from "../../Context";
import { FiXCircle } from "react-icons/fi";

const ProductDetail = () => {
  const context = useContext(ShoppinCartContext);
  // console.log(context.showProductDetail);

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] bottom-4`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          {" "}
          <div onClick={() => context.closeProductDetail()}>
            <FiXCircle className="h-6 w-6 text-black-500 cursor-pointer" />
          </div>
        </div>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={context.showProductDetail.images?.[0]}
          alt={context.showProductDetail.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">
          ${context.showProductDetail.price}
        </span>
        <span className="font-medium text-md">
          {context.showProductDetail.title}
        </span>
        <span className="font-light text-sm">
          {context.showProductDetail.description}
        </span>
      </p>
    </aside>
  );
};

// tendra problema este codifo src={context.showProductDetail.images[0]

export { ProductDetail };
