import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailUnread, IoWarningOutline } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { IVendor } from "@/components/types";
import FormattedPrice from "@/components/FormattedPrice";

const ProfileHeader = ({ vendor }: { vendor: IVendor }) => {
  return (
    <>
      <div className="mb-5">
        <h2 className="text-lg font-semibold">Profile</h2>
        <div className="flex gap-2 text-xs text-neutral-500 font-medium">
          <a href="/" className="hover:text-primary">
            Home
          </a>
          -
          <a href="/dashboard/vendor" className="hover:text-primary">
            Profile
          </a>
        </div>
      </div>
      <div className="p-8 rounded-lg box-shadow border border-shadowBorder w-full relative">
        <div className="sm:flex gap-5 w-full">
          {/* Vendor Image */}
          <Image
            src={vendor?.user?.profileImg}
            alt="Vendor Profile Pic"
            width={160}
            height={160}
            className="rounded-lg w-full mb-2.5 sm:mb-0 lg:max-w-[160px] bg-cover bg-center"
          />
          {/* Vendor Image End */}
          <div className="w-full">
            <div className="sm:flex justify-between w-full">
              <div className="mb-5 sm:mb-0">
                {/* Vendor Name */}
                <div className="flex items-center gap-2 ">
                  <h4 className="text-lg lg:text-xl font-semibold hover:text-primary">
                    {vendor?.user?.firstName + " " + vendor?.user?.lastName}
                  </h4>
                  {vendor?.status !== "Approved" ? (
                    <div className="relative inline-block group">
                      <div className="text-amber-500 cursor-pointer">
                        <IoWarningOutline className="hover:opacity-75" />
                      </div>
                      <div className="absolute z-10 w-[250px] bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded-md opacity-0 invisible transition-opacity duration-300 group-hover:opacity-100 group-hover:visible text-center">
                        Your profile is under review
                      </div>
                    </div>
                  ) : (
                    <div className="text-blue-400">
                      <RiVerifiedBadgeFill size={22} />{" "}
                    </div>
                  )}
                </div>
                {/* Vendor Name End*/}
                {/* vendor location */}
                <div className="flex gap-x-5 gap-y-1 items-center flex-wrap">
                  <p className="flex items-center gap-1 text-sm font-medium text-neutral-400">
                    <FaUserCircle size={14} /> Photographer
                  </p>
                  <p className="flex items-center gap-1 text-sm font-medium text-neutral-400">
                    <FaLocationDot /> California, USA
                  </p>
                  <p className="flex items-center gap-1 text-sm font-medium text-neutral-400">
                    <IoMailUnread /> {vendor?.user?.email}
                  </p>
                </div>
                {/* vendor location End*/}
              </div>
              <button className="bg-primary text-sm px-3 py-2 lg:py-2 text-white rounded-md max-w-[105px] w-full hidden min-[890px]:block">
                Withdraw
              </button>
            </div>

            {/*  Vendor Stats */}
            <div className="mt-5 lg:flex gap-x-4 items-center space-y-3 lg:space-y-0">
              <div className="border rounded-lg p-3 sm:max-w-[125px] w-full text-center">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <MdKeyboardDoubleArrowUp
                    className="text-green-500"
                    size={15}
                  />
                  <h4 className="text-lg font-semibold">
                    {vendor?.wallet ? (
                      <FormattedPrice amount={vendor?.wallet!} />
                    ) : (
                      "$0"
                    )}
                  </h4>
                </div>
                <p className="text-[12px] text-neutral-400">Earnings</p>
              </div>

              <div className="border rounded-lg p-3 sm:max-w-[125px] w-full text-center">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <MdKeyboardDoubleArrowUp
                    className="text-green-500"
                    size={15}
                  />
                  <h4 className="text-lg font-semibold">
                    {vendor?.wallet ? (
                      <FormattedPrice amount={vendor?.wallet!} />
                    ) : (
                      "$0"
                    )}
                  </h4>
                </div>
                <p className="text-[12px] text-neutral-400">Balance</p>
              </div>
              <div className="border rounded-lg p-3 sm:max-w-[125px] w-full text-center">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <MdKeyboardDoubleArrowUp
                    className="text-green-500"
                    size={15}
                  />
                  <h4 className="text-lg font-semibold">
                    {vendor?.products?.length}
                  </h4>
                </div>
                <p className="text-[12px] text-neutral-400">Products</p>
              </div>

              <div className="border rounded-lg p-3 sm:max-w-[125px] w-full text-center">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <MdKeyboardDoubleArrowUp
                    className="text-green-500"
                    size={15}
                  />
                  <h4 className="text-lg font-semibold">
                    {vendor?.soldProducts?.length! > 0
                      ? vendor?.soldProducts?.length + "+"
                      : vendor?.soldProducts?.length}
                  </h4>
                </div>
                <p className="text-[12px] text-neutral-400">Sales</p>
              </div>
            </div>
            {/*  Vendor Stats End */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
