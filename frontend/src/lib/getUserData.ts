import { BASE_URL } from "@/components/helper";
import axios from "axios";
import { useQuery } from "react-query";

const fetchUser = async () => {
  try {
    const url = `${BASE_URL}/users/get-user`;
    const response = await axios.get(url, { withCredentials: true });
    console.log(response.data.data);
    return response.data.data;
  } catch (error: any) {
    return error.response.data.errorMessage;
  }
};

const fetchUserCart = async () => {
  try {
    const url = `${BASE_URL}/users/get-cart`;
    const response = await axios.get(url, {
      withCredentials: true,
    });
    return response.data.data;
  } catch (error: any) {
    return error.response.data.errorMessage;
  }
};

const fetchAddToCart = async (cartInfo: { productId: any }) => {
  try {
    const url = `${BASE_URL}/product/add-cart/${cartInfo.productId}/`;
    const response = await axios.post(url, cartInfo, {
      withCredentials: true,
    });
    return response.data.data;
  } catch (error: any) {
    return error.response.data.errorMessage;
  }
};

// Combination of multiple fetch functions and return an object containing all the data
const fetchUserData = async () => {
  const userData = await fetchUser();
  const userCart = await fetchUserCart();
  return { userData, userCart };
};

export const useGetUser = () => {
  return useQuery("user", fetchUserData);
};
