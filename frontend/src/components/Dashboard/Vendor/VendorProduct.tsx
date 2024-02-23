import VendorProductCard from "@/components/Dashboard/Vendor/VendorProductCard";
import { IProduct } from "@/components/types";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import Pagination from "./Pagination";

const VendorProduct = ({ products }: { products: IProduct[] }) => {
  return (
    <>
      <div className="flex items-center justify-between mt-10 mb-5">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">My Product</h2>
          <p className="text-sm text-neutral-500 font-medium">Recent</p>
        </div>
        <Link
          href="/dashboard/add-product"
          className="bg-primary text-[13px] px-3 py-2 text-white rounded-md flex items-center gap-2"
        >
          <FaPlus /> New Product
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 min-[1390px]:grid-cols-3 gap-10">
        {products &&
          products.map((product) => (
            <VendorProductCard product={product} key={product._id} />
          ))}
      </div>

      <div className="flex items-center justify-between mt-8">
        <p className="hidden md:block">Showing 1 to 10 of 50 entries</p>
        <Pagination />
      </div>
    </>
  );
};

export default VendorProduct;
