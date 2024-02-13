"use client";
import { ReactNode, createContext, useReducer } from "react";
import toast from "react-hot-toast";
import { BASE_URL } from "../helper";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { QueryData } from "./Interface";

// Create a context for the API provider
export const AuthContext = createContext<any>(null);
// Initial state for the reducer
const initialState = {
  user: null,
  error: null,
};

// Define action types
const SET_USER = "SET_USER";
const SET_ERROR = "SET_ERROR";
const LOGOUT = "LOGOUT";
const CHECK_LOGIN = "CHECK_LOGIN"; // New action type for logout

// Reducer function to handle state changes based on actions
const apiReducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload, error: null };
    case SET_ERROR:
      return { ...state, error: action.payload, user: null };
    case CHECK_LOGIN:
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case LOGOUT:
      localStorage.removeItem("token"); // Remove token on logout
      return { ...initialState }; // Reset state to initial state on logout
    default:
      return state;
  }
};

// API provider component
const AuthProviderFake = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  // check if user is logged in

  // Function to handle user registration
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
        // Update state with user data and set JWT token
        dispatch({ type: SET_USER, payload: data.data.user });
        toast.success(data.message);
      } else {
        dispatch({ type: SET_ERROR, payload: data.errorMessage });
        toast.error(data.errorMessage);
      }
    } catch (error) {
      console.error("Error registering user:", error);
      dispatch({
        type: SET_ERROR,
        payload: "An error occurred while registering user.",
      });
    }
  };

  // Function to handle user login
  const loginUser = async (credentials: {
    email: string;
    password: string;
  }) => {
    try {
      // Make API request to login user
      const response = await fetch(`${BASE_URL}/api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Store token in local storage on successful login
        console.log(data);
        localStorage.setItem("token", data.data.data.accessToken);
        // Update state with user data
        dispatch({ type: SET_USER, payload: data.data.user });
        toast.success(data.message);
        window.location.href = "/user";
      } else {
        dispatch({ type: SET_ERROR, payload: data.errorMessage });
        toast.error(data.errorMessage);
      }
    } catch (error) {
      console.log("Error logging in user:", error);
      dispatch({
        type: SET_ERROR,
        payload: "An error occurred while logging in user.",
      });
    }
  };

  const checkLoginStatus = async () => {
    const userQueryKey = ["user"] as const;

    try {
      const { data, isLoading } = useQuery({
        queryKey: userQueryKey,
        queryFn: async () => {
          const response = await fetch(
            `http://localhost:5000/api/v1/auth/check-login`
          );
          return response.json();
        },
      });

      console.log(data);

      dispatch({ type: SET_USER, payload: data });

      if (data?.data.isLoggedIn) {
        dispatch({ type: CHECK_LOGIN, payload: data.data.user });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        error: state.error,
        registerUser,
        loginUser,
        checkLoginStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviderFake;
