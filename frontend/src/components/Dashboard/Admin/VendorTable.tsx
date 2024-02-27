import { Axios } from "@/lib/axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import PendingVendorModal from "./PendingVendorModal";
import { IVendor } from "@/components/types";
import { IoOpenSharp } from "react-icons/io5";
import Link from "next/link";

interface VendorTableProps {
  vendorData: IVendor[];
  refetch?: () => void;
}

const VendorTable = ({ vendorData, refetch }: VendorTableProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState<IVendor | null>(null);
  const handleVendorRequest = async (vendorId: string, status: string) => {
    try {
      const res = await Axios.patch(`admin/update-vendor-request/${vendorId}`, {
        status,
      });
      if (res?.data.success) {
        toast.success(res?.data.message);
      }
      refetch?.();
      return res?.data?.data;
    } catch (error: any) {
      if (error.response.data.success === false) {
        toast.error(error.response.data.errorMessage);
      }
      console.log("Vendor Update error", error);
    }
  };

  const handleViewVendor = (vendor: IVendor) => {
    setSelectedVendor(vendor);
    setOpenModal(true);
  };

  return (
    <div className="">
      <div className="overflow-x-scroll lg:overflow-hidden w-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="">
            <tr>
              <th className="py-3 px-8 whitespace-nowrap">Name</th>
              <th className="py-3 px-8 whitespace-nowrap">Email</th>
              <th className="py-3 px-8 whitespace-nowrap">Company Name</th>
              <th className="py-3 px-8 whitespace-nowrap">Owner Name</th>
              <th className="py-3 px-8 whitespace-nowrap">Website</th>
              <th className="py-3 px-8 whitespace-nowrap">Status</th>
              <th className="py-3 px-8 whitespace-nowrap text-center">
                Preview
              </th>
            </tr>
          </thead>
          <tbody>
            {vendorData.map((vendor) => (
              <tr
                key={vendor?._id}
                className="bg-white border-b last:border-none hover:bg-gray-100 text-sm"
              >
                <td className="py-4 px-8">
                  <p className="whitespace-nowrap px-3 md:px-0">
                    {vendor?.user?.firstName}
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
                <td className="py-4 px-8">
                  <p className="whitespace-nowrap px-3 md:px-0">
                    <Link
                      href={vendor?.website}
                      target="_blank"
                      className="text-blue-500 underline hover:text-[#E5185D] duration-300"
                    >
                      {vendor?.website}
                    </Link>
                  </p>
                </td>
                <td className="py-4 px-8">
                  <p className="bg-amber-500 py-1 px-3.5 text-white rounded-full text-xs">
                    {vendor?.status}
                  </p>
                </td>

                <td className="flex justify-center items-center py-4 px-8">
                  <button
                    onClick={() => handleViewVendor(vendor)}
                    className="font-medium text-primary flex justify-center items-center mt-1.5"
                  >
                    <IoOpenSharp size={25} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {openModal && selectedVendor && (
        <PendingVendorModal
          handleVendorStatusUpdate={handleVendorRequest}
          onClose={() => setOpenModal(false)}
          vendor={selectedVendor}
        />
      )}
    </div>
  );
};

export default VendorTable;
