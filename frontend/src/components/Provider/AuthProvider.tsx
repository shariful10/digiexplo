"use client";
import toast from "react-hot-toast";
import React, { createContext, useContext, useReducer, ReactNode } from "react";

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
			return { ...state, user: null, error: null };
		default:
			return state;
	}
};

// API provider component
const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(apiReducer, initialState);

	// Function to handle user registration
	const registerUser = async (userData: any) => {
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

			if (response.ok) {
				dispatch({ type: SET_USER, payload: data.user });
				toast.success(data.message);
			} else {
				dispatch({ type: SET_ERROR, payload: data.error });
			}
			if (!data.success) {
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
			const response = await fetch(
				"http://localhost:5000/api/v1/auth/login",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(credentials),
				}
			);

			const data = await response.json();

			if (response.ok) {
				// Store token in local storage on successful login
				localStorage.setItem("token", data.data);
				dispatch({ type: SET_USER, payload: data.user });
				toast.success(data.message);
			} else {
				dispatch({ type: SET_ERROR, payload: data.error });
			}

			if (!data.success) {
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
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
