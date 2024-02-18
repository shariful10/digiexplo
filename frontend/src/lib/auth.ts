// import { useUser } from "@/components/Context/UserContext";
import { BASE_URL } from "@/components/helper";
import axios from "axios";

import toast from "react-hot-toast";

const registerUser = async (userData: any) => {
  console.log(userData);

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
    console.log(data);

    if (data && data.success) {
      toast.success(data.message);
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
    const res = await axios.post(
      `${BASE_URL}/auth/login`,
      loginData, // this this the body of post method
      {
        withCredentials: true,
      }
    );

    const result = res.data;

    if (result && result.success) {
      toast.success(result.message);

      // store userData for global use: data.user
    } else {
      toast.error(result.errorMessage);
    }
  } catch (error) {
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
      toast.success(data.message);
      window.location.href = "/ ";

      localStorage.removeItem("digitalization");
    } else {
      toast.error(data.errorMessage);
    }
  } catch (error) {
    console.log("Error logging in user:", error);
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
