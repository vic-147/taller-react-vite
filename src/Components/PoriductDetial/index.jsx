import { XCircleIcon } from "@heroicons/react/24/solid";

const ProductDetail = () => {
  return (
    <aside className="flex flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] bottom-4">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          {" "}
          <div>
            {" "}
            <XCircleIcon className="h-6 w-6 text-black-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export { ProductDetail };
