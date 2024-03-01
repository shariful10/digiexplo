"use client";
import Image from "next/image";
import { Axios } from "@/lib/axios";
import { useQuery } from "react-query";
import { IoClose } from "react-icons/io5";
import { IProduct } from "@/components/types";
import FormattedPrice from "@/components/FormattedPrice";

const CartPage = () => {
  const { data: user = [], refetch } = useQuery(["user"], async () => {
    const res = await Axios.get(`/users/get-user`);
    return res?.data?.data;
  });

  const handleBuyProduct = async (productId: string) => {
    try {
      const res = await Axios.post(`/product/buy-product-intend/${productId}`);

      if (res.status === 200) {
        window.location.href = res?.data?.url;
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  // Calculate total price
  const totalPrice =
    user?.cart?.products?.reduce(
      (acc: number, { price }: IProduct) => acc + price,
      0
    ) || 0;

  return (
    <div className="py-10 bg-[#F7F7F7] my-5 lg:my-10 rounded-xl">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {user?.cart?.products?.map(
            ({ _id, productName, thumbnail, category, price }: IProduct) => (
              <div
                key={_id}
                className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
              >
                <Image
                  src={thumbnail}
                  width={400}
                  height={200}
                  alt="product-image"
                  className="w-full rounded-lg sm:w-40 h-40 sm:h-20"
                />
                <div className="sm:ml-4 flex sm:w-full justify-between">
                  <div className="mt-5 sm:mt-0 flex flex-col justify-between">
                    <div className="">
                      <h2 className="text-lg font-bold text-gray-900">
                        {productName}
                      </h2>
                      <p className="mt-1 text-xs text-gray-700">{category}</p>
                    </div>
                    <div className="text-sm mt-3">
                      <FormattedPrice
                        amount={price}
                        className="text-primary font-semibold"
                      />
                    </div>
                  </div>
                  <div className="cursor-pointer mt-auto md:mt-0">
                    <IoClose
                      size={20}
                      className="hover:text-red-600 hover:rotate-90 hover:scale-110 duration-300"
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        {/* Sub total */}
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 flex flex-col gap-2">
          {user?.cart?.products?.map(
            ({ _id, productName, price }: IProduct) => (
              <div key={_id} className="flex justify-between gap-4 text-[15px]">
                <p className="text-gray-700">{productName}</p>
                <FormattedPrice
                  amount={price}
                  className="text-primary font-semibold"
                />
                <button
                  className="mt-6 w-full rounded-md bg-blue-500 py-2 font-medium text-blue-50 hover:bg-blue-600"
                  onClick={() => handleBuyProduct(_id)}
                >
                  Check out
                </button>
              </div>
            )
          )}
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="mb-1 text-lg font-bold">
              <FormattedPrice
                amount={totalPrice}
                className="text-primary font-semibold"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
