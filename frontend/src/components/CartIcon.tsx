import { Axios } from "@/lib/axios";
import { useQuery } from "react-query";
import { IoMdCart } from "react-icons/io";
import React, { SetStateAction } from "react";
import { IUser } from "./types";

const CartIcon = ({
  setShowCart,
  user,
}: {
  setShowCart: React.Dispatch<SetStateAction<boolean>>;
  user: IUser;
}) => {
  return (
    <div onClick={() => setShowCart(true)} className="relative cursor-pointer">
      <IoMdCart className="text-2xl" />
      <div className="bg-primary rounded-full p-0.5 h-4 w-4 flex justify-center items-center text-white text-[10px] absolute -top-1 -right-1">
        {user?.cart ? user?.cart?.products?.length : "0"}
      </div>
    </div>
  );
};

export default CartIcon;
