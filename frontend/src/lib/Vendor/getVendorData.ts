import { useQuery } from "react-query";
import axios from "axios";
import { BASE_URL } from "@/components/helper";

const fetchVendor = async (vendorId: string) => {
  const url = `${BASE_URL}/vendors/get-vendor/${vendorId}`;
  return axios.post(url, { withCredentials: true });
};

export default function useVendor(vendorId: string) {
  return useQuery(["vendor", vendorId], () => fetchVendor(vendorId));
}
