import { BASE_URL } from "@/components/helper";
import axios from "axios";
import { useQuery } from "react-query";

const fetchUser = async () => {
  const url = `${BASE_URL}/users/get-user`;
  const response = await axios.get(url, {
    withCredentials: true,
  });
  return response.data;
};

export const useGetUser = () => {
  return useQuery("user", fetchUser);
};
