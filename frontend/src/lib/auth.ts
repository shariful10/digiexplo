import { BASE_URL } from "@/components/helper";
import axios from "axios";

import toast from "react-hot-toast";

const registerUser = async (userData: any) => {
  try {
    // Make API request to register user
    const response = await axios.post(
      `${BASE_URL}/users/create-user`,
      userData,
      {
        withCredentials: true,
      }
    );

    const data = await response.data;

    if (data && data.success) {
      toast.success(data.message);
      const isVendorRequest = localStorage.getItem("vendorRequest");
      if (isVendorRequest) {
        window.location.href = "/vendor-request";
      } else {
        window.location.href = "/";
      }
    } else {
      toast.error(data.errorMessage);
    }
  } catch (error: any) {
    console.error("Error registering user:", error.response.data);
    toast.error(error.response.data.message);
  }
};

const loginUser = async (loginData: { email: string; password: string }) => {
  try {
    console.log(loginData);

    const res = await axios.post(`${BASE_URL}/auth/login`, loginData, {
      withCredentials: true,
    });

    const result = res.data;

    if (result && result.success) {
      toast.success(result.message);
      window.location.href = "/";
    } else {
      toast.error(result.errorMessage);
    }
  } catch (error: any) {
    toast.error(error.response.data.errorMessage);
    console.log("Error logging in user:", error);
  }
};

const logoutUser = async () => {
  try {
    const response = await fetch(`${BASE_URL}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await response.json();

    if (response.ok && data.success) {
      console.log(data);
      toast.success(data.message);
      window.location.href = "/ ";
    }
  } catch (error: any) {
    toast.error(error.response.data.errorMessage);
    console.log("Error logging in user:", error.response.data);
  }
};

const getUser = async () => {
  const res = await axios.get(
    `/api/user/me`,
    // this this the body of post method
    {
      withCredentials: true,
    }
  );

  const data = res.data;
  console.log(data.user._id);
  return data;
};

export const auth = { registerUser, loginUser, logoutUser, getUser };
