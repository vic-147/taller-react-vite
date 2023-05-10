import { useContext } from "react";
import { ShoppinCartContext } from "../../Context";
import { FiXCircle } from "react-icons/fi";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppinCartContext);
  // console.log(context.showProductDetail);

  return (
    <aside
      className={`${
        context.isCheckoutSideMneu ? "flex" : "hidden"
      } flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] bottom-4`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Orders</h2>
        <div>
          <div onClick={() => context.closeCheckoutSideMenu()}>
            <FiXCircle className="h-6 w-6 text-black-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </aside>
  );
};


export { CheckoutSideMenu };
