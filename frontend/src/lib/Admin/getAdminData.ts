import { useQuery } from "react-query";
import axios from "axios";
import { BASE_URL } from "@/components/helper";

const fetchPendingVendor = async () => {
  try {
    const url = `${BASE_URL}/admin/get-pending-vendor-request/`;
    const response = await axios.get(url, { withCredentials: true });
    return response.data.data;
  } catch (error: any) {
    return error.response.data.errorMessage;
  }
};

const fetchPendingProducts = async () => {
  try {
    const url = `${BASE_URL}/admin/get-pending-vendor-request/`;
    const response = await axios.get(url, { withCredentials: true });
    return response.data.data;
  } catch (error: any) {
    return error.response.data.errorMessage;
  }
};

// Combination of multiple fetch functions and return an object containing all the data
const fetchAdminData = async () => {
  const pendingVendors = await fetchPendingVendor();
  const pendingProducts = await fetchPendingProducts();
  return { pendingVendors, pendingProducts };
};

export function useAdmin() {
  return useQuery("admin", () => fetchAdminData());
}

// for post methods
const fetchVendorStatus = async (vendorId: string) => {
  const url = `${BASE_URL}/admin/update-vendor-request/:vendorId/${vendorId}`;
  return axios.patch(url, { withCredentials: true });
};

export function updateVendor(vendorId: string) {
  return useQuery(["updateVendorStatus", vendorId], () =>
    fetchVendorStatus(vendorId)
  );
}
