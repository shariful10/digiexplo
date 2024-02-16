// import { useUser } from "@/components/Context/UserContext";
import { BASE_URL } from "@/components/helper";
import axios from "axios";

import toast from "react-hot-toast";

const registerUser = async (userData: {
  userData: {
    email: string;
    name: string;
    password: string;
    phone: string;
    profileImg: string;
    username: string;
  };
}) => {
  try {
    // Make API request to register user
    const response = await fetch(`${BASE_URL}/api/v1/users/create-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      toast.success(data.message);
    } else {
      toast.error(data.errorMessage);
    }
  } catch (error) {
    console.error("Error registering user:", error);
  }
};

const loginUser = async (loginData: { email: string; password: string }) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/api/v1/auth/login`,
      loginData, // this this the body of post method
      {
        withCredentials: true,
      }
    );

    const result = res.data;
    console.log(result);

    if (result && result.success) {
      toast.success(result.message);
      window.location.href = "/";
      localStorage.setItem("digitalization" as string, result.data.userToken);

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
    const response = await fetch(`${BASE_URL}/api/v1/auth/logout`, {
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
  console.log(data);
  return data;
};

export const auth = { registerUser, loginUser, logoutUser, getUser };
