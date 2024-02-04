"use client";
import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import toast from "react-hot-toast";

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
const LOGOUT = "LOGOUT"; // New action type for logout

// Reducer function to handle state changes based on actions
const apiReducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload, error: null };
    case SET_ERROR:
      return { ...state, error: action.payload, user: null };
    case LOGOUT:
      localStorage.removeItem("token"); // Remove token on logout
      return { ...initialState }; // Reset state to initial state on logout
    default:
      return state;
  }
};

// API provider component
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          // If a token exists, make a request to validate it
          const response = await fetch(
            "http://localhost:5000/api/v1/auth/validate-user",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setLoading(true);

          const data = await response.json();

          if (response.ok && data.success) {
            // If token is valid, update user data in the state
            dispatch({ type: SET_USER, payload: data.data.user });
            setLoading(false);
          } else {
            // If token is not valid, log the user out
            dispatch({ type: LOGOUT });
          }
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };

    checkAuthentication();
  }, []); // Run only once when the component mounts

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
      const response = await fetch(
        "http://localhost:5000/api/v1/users/create-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

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
      const response = await fetch("http://localhost:5000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Store token in local storage on successful login
        localStorage.setItem("token", data.data.accessToken);
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

  // Function to handle user logout
  const logoutUser = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        error: state.error,
        registerUser,
        loginUser,
        logoutUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
