import { BASE_URL } from "@/components/helper";
import axios from "axios";
import { useQuery } from "react-query";

const fetchUser = async () => {
  try {
    const url = `${BASE_URL}/users/get-user`;
    const response = await axios.get(url, {
      withCredentials: true,
    });
    return response.data.data;
  } catch (error: any) {
    return error.response.data.errorMessage;
  }
};

export const useGetUser = () => {
  return useQuery("user", fetchUser);
};
