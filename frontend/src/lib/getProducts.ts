import { useQuery } from "react-query";
import { Axios } from "./axios";
import { IProduct, QueryParams } from "@/components/types";

export async function fetchPendingProducts() {
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
  } = useQuery(["products"], fetchPendingProducts);

  return {
    data,
    isLoading,
    refetch,
  };
}

export async function fetchApprovedProducts(
  query?: QueryParams
): Promise<IProduct[]> {
  try {
    let url = "product/get-products-by-category";

    if (query?.category) {
      url += `?category=${query?.category}`;
    }

    if (query?.limit) {
      url += `?limit=${query?.limit}`;
    }

    if (query?.page) {
      url += `?page=${query?.page}`;
    }

    const res = await Axios.get(url);
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
      throw new Error("Error fetching products");
    }
  }
}

export function useGetApprovedProducts(query?: QueryParams) {
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery<IProduct[]>(["products"], () => fetchApprovedProducts(query));

  return {
    data,
    isLoading,
    refetch,
  };
}
