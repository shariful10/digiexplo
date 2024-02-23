import { useQuery } from "react-query";
import { Axios } from "./axios";

export async function fetchProducts() {
  try {
    const res = await Axios.get(`admin/get-pending-products`);
    return res?.data?.data;
  } catch (error: any) {
    if (
      error.response &&
      error.response.data &&
      error.response.data.success === false
    ) {
      // Handle error, maybe show a toast
      throw new Error(error.response.data.errorMessage);
    } else {
      throw new Error("An error occurred while fetching products");
    }
  }
}

export function useGetPendingProducts() {
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery(["products"], fetchProducts);

  return {
    data,
    isLoading,
    refetch,
  };
}
