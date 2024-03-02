import { IVendor } from "@/components/types";
import Loader from "@/components/Loader/Loader";
import Link from "next/link";

interface VendorTableProps {
  vendorData: IVendor[];
  refetch?: () => void;
  isLoading: boolean;
}

const AllVendorTable = ({
  refetch,
  isLoading,
  vendorData,
}: VendorTableProps) => {
  console.log(vendorData);
  return (
    <div className="w-full">
      <div className="overflow-x-scroll 2xl:overflow-hidden w-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead>
            <tr>
              <th className="py-3 px-8 whitespace-nowrap">Name</th>
              <th className="py-3 px-8 whitespace-nowrap">Email</th>
              <th className="py-3 px-8 whitespace-nowrap">Company Name</th>
              <th className="py-3 px-8 whitespace-nowrap">Owner Name</th>
              <th className="py-3 px-8 whitespace-nowrap">Website</th>
              <th className="py-3 px-8 whitespace-nowrap">Status</th>
              <th className="py-3 px-8 whitespace-nowrap text-center">
                Commission
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <Loader />
            ) : (
              vendorData.map((vendor) => (
                <tr
                  key={vendor?._id}
                  className="bg-white border-b last:border-none hover:bg-gray-100 text-sm"
                >
                  <td className="py-4 px-8">
                    <p className="whitespace-nowrap px-3 md:px-0">
                      {vendor?.user?.firstName + " " + vendor?.user?.lastName}
                    </p>
                  </td>
                  <td className="py-4 px-8">
                    <p className="whitespace-nowrap px-3 md:px-0">
                      {vendor?.user?.email}
                    </p>
                  </td>
                  <td className="py-4 px-8">
                    <p className="whitespace-nowrap px-3 md:px-0">
                      {vendor?.companyName}
                    </p>
                  </td>
                  <td className="py-4 px-8">
                    <p className="whitespace-nowrap px-3 md:px-0">
                      {vendor?.ownerName}
                    </p>
                  </td>
                  <td className="py-4 px-8 whitespace-nowrap">
                    <Link
                      href={vendor?.website}
                      className="px-3 md:px-0 hover:text-primary hover:underline"
                    >
                      {vendor?.website}
                    </Link>
                  </td>
                  <td className="py-4 px-8 whitespace-nowrap">
                    <button className="bg-green-200 text-green-500 rounded-full px-3 py-0.5 cursor-text">
                      Approved
                    </button>
                  </td>
                  <td className="flex justify-center items-center py-4 px-8">
                    <select className="text-white bg-primary rounded-md px-3 py-2 focus:outline-none cursor-pointer">
                      <option
                        value="70"
                        className="py-2 px-4 text-primary bg-white hover:bg-gray-100 cursor-pointer"
                      >
                        30%
                      </option>
                      <option
                        value="80"
                        className="py-2 px-4 text-primary bg-white hover:bg-gray-100 cursor-pointer"
                      >
                        20%
                      </option>
                    </select>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllVendorTable;
