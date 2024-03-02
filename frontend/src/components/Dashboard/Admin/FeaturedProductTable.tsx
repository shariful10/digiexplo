import { IFeaturedProduct, IVendor } from "@/components/types";
import Loader from "@/components/Loader/Loader";
import Link from "next/link";
import { IoOpenSharp } from "react-icons/io5";
import { FaTrash } from "react-icons/fa6";
import { products } from "@/components/data";

interface VendorTableProps {
  featuredProducts: IFeaturedProduct[];
  refetch?: () => void;
  isLoading: boolean;
  handleDeleteFeaturedProducts: (productId: string) => Promise<void>;
}

const FeaturedProductTable = ({
  refetch,
  isLoading,
  featuredProducts,
  handleDeleteFeaturedProducts,
}: VendorTableProps) => {
  console.log(featuredProducts);
  return (
    <div className="px-7 md:px-10">
      {isLoading ? (
        <Loader />
      ) : featuredProducts.length > 0 ? (
        <div className=" rounded-md box-shadow border border-[#F1F1F4] max-w-5xl w-full overflow-x-scroll lg:overflow-hidden">
          <div className="w-full">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="">
                <tr>
                  <th className="px-8 py-5 md:px-10 whitespace-nowrap">SL</th>
                  <th className="px-8 py-5 md:px-10 whitespace-nowrap">
                    Title
                  </th>
                  <th className="px-8 py-5 md:px-10 whitespace-nowrap">
                    Price
                  </th>
                  <th className="px-8 py-5 md:px-10 whitespace-nowrap">
                    Category
                  </th>
                  <th className="px-8 py-5 md:px-10 whitespace-nowrap text-center">
                    Status
                  </th>
                  <th className="px-8 py-5 md:px-10 whitespace-nowrap text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {featuredProducts.map((featuredProduct, index: number) => (
                  <tr
                    className="bg-white border-b last:border-none hover:bg-gray-100 text-sm"
                    key={featuredProduct?.product?._id}
                  >
                    <td className="px-8 py-5 md:px-10">
                      <p className="whitespace-nowrap capitalize">
                        {index + 1}
                      </p>
                    </td>
                    <td className="px-8 py-5 md:px-10">
                      <p className="whitespace-nowrap capitalize">
                        {featuredProduct?.product?.productName}
                      </p>
                    </td>
                    <td className="px-8 py-2.5 md:px-10">
                      <p className="whitespace-nowrap ">
                        ${featuredProduct?.product?.price}
                      </p>
                    </td>
                    <td className="px-8 py-2.5 md:px-10">
                      <p className="whitespace-nowrap ">
                        {featuredProduct?.product?.category}
                      </p>
                    </td>
                    <td className="whitespace-nowrap px-8 py-2.5 md:px-10">
                      <p className="bg-green-300 py-1 px-0.5 text-green-600 rounded-full text-xs text-center">
                        {featuredProduct?.product?.status}
                      </p>
                    </td>
                    <td className="whitespace-nowrap px-8 py-2.5 md:px-10">
                      <p
                        className="hover:text-red-500 hover:scale-125 cursor-pointer duration-300 flex justify-center"
                        onClick={() =>
                          handleDeleteFeaturedProducts(featuredProduct?._id)
                        }
                      >
                        <FaTrash size={18} />
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p>No Pending Products</p>
      )}
    </div>
  );
};

export default FeaturedProductTable;
