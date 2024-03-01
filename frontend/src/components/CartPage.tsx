"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IProduct, IUser } from "./types";
import { Axios } from "@/lib/axios";
import { productItems } from "./data";
import { useQuery } from "react-query";
import { CgClose } from "react-icons/cg";
import FormattedPrice from "./FormattedPrice";

interface CartPageProps {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser;
}

const CartPage = ({ showCart, setShowCart, user }: CartPageProps) => {
  // Calculate total price
  const totalPrice =
    user?.cart?.products?.reduce(
      (acc: number, { price }: IProduct) => acc + price,
      0
    ) || 0;

  return (
    <div>
      <div
        className={`${
          user?.cart?.products?.length > 0
            ? "w-[300px] md:w-[400px]"
            : "w-[300px]"
        }  bg-white h-screen p-5 fixed top-0 z-[99999] ${
          showCart
            ? "right-0 duration-500 overflow-hidden"
            : "-right-[450px] duration-500"
        }`}
      >
        <div className="flex flex-row-reverse md:flex-row justify-between items-center text-[#1b2430] mb-10">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-medium">Cart</h3>
            <span>
              (
              {user?.cart?.products?.length
                ? user?.cart?.products?.length
                : "0"}
              )
            </span>
          </div>
          <CgClose
            onClick={() => setShowCart(false)}
            className="cursor-pointer text-xl md:text-2xl"
          />
        </div>
        {user?.cart?.products?.length > 0 ? (
          <div className="flex flex-col gap-4">
            {user?.cart?.products?.map(
              ({ _id, thumbnail, productName, price }: IProduct) => (
                <div key={_id} className="border-t-2">
                  <div className="flex gap-4 pt-5 pb-2">
                    <Image
                      src={thumbnail}
                      width={100}
                      height={20}
                      className="rounded-md w-[100px] height-[40px]"
                      alt=""
                    />
                    <div className="flex flex-col items-start gap-2">
                      <div>
                        <h4 className="text-sm md:text-base font-medium">
                          {productName}
                        </h4>
                        <FormattedPrice
                          amount={price}
                          className="text-sm md:text-base font-semibold text-primary mt-1"
                        />
                      </div>
                      <button className="text-sm text-red-600 hover:underline">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        ) : (
          <h4 className="text-lg text-[#1b2430] mt-10">Your cart is empty!</h4>
        )}
        {user?.cart?.products?.length > 0 ? (
          <>
            <div className="text-lg font-semibold mt-5 flex justify-between items-center">
              <h4 className="">Total Price:</h4>
              <FormattedPrice amount={totalPrice} className="text-primary" />
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-5">
              <Link href="/cart" onClick={() => setShowCart(false)}>
                <button className="text-sm md:text-base text-primary hover:text-white py-3 border border-primary hover:border-transparent hover:bg-primary duration-300 w-full">
                  View Cart
                </button>
              </Link>
              <Link href="/checkout" onClick={() => setShowCart(false)}>
                <button className="text-sm md:text-base text-white hover:text-primary py-3 bg-primary hover:bg-transparent border border-transparent hover:border-primary duration-300 w-full">
                  Checkout
                </button>
              </Link>
            </div>
          </>
        ) : (
          ""
        )}
      </div>

      <div
        className={`fixed top-0 h-screen w-full bg-black/50 z-[60] duration-300 ${
          showCart ? "block left-0 " : "hidden"
        }`}
        onClick={() => setShowCart(false)}
      />
    </div>
  );
};

export default CartPage;
