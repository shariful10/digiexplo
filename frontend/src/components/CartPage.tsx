import React from "react";
import { CgClose } from "react-icons/cg";

interface Props {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartPage = ({ showCart, setShowCart }: Props) => {
  return (
    <div className="">
      <div
        className={`w-[300px] bg-white h-screen p-5 fixed top-0 z-[99999] ${
          showCart
            ? "right-0 duration-500 overflow-hidden"
            : "-right-[450px] duration-500"
        }`}
      >
        <div className="flex flex-row-reverse md:flex-row justify-between items-center text-[#1b2430]">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-medium">Cart</h3>
            <span>(0)</span>
          </div>
          <CgClose
            onClick={() => setShowCart(false)}
            className="cursor-pointer text-xl md:text-2xl"
          />
        </div>
        <h4 className="text-lg text-[#1b2430] mt-10">Your cart is empty!</h4>
      </div>

      <div
        className={`fixed top-0 h-screen w-full bg-black/50 z-[60] duration-300 ${
          showCart ? "right-0 " : "-right-[1950px]"
        }`}
        onClick={() => setShowCart(false)}
      ></div>
    </div>
  );
};

export default CartPage;
