// import { useUser } from "@/components/Context/UserContext";
import { BASE_URL } from "@/components/helper";
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

const loginUser = async (credentials: { email: string; password: string }) => {
  try {
    // Make API request to login user
    const response = await fetch(`${BASE_URL}/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      toast.success(data.message);
      // window.location.href = "/ ";
      localStorage.setItem("digitalization" as string, data.data.userToken);

      // store userData for global use: data.user
    } else {
      toast.error(data.errorMessage);
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
      // window.location.href = "/ ";

      localStorage.removeItem("digitalization");
    } else {
      toast.error(data.errorMessage);
    }
  } catch (error) {
    console.log("Error logging in user:", error);
  }
};

export const auth = { registerUser, loginUser, logoutUser };
