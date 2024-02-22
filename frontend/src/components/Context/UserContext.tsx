// UserContext.tsx
"use client";

import { useGetUser } from "@/lib/getUserData";
import React, { createContext, useContext } from "react";
import { ICart, IUser } from "../types";

interface UserContextType {
  data: {
    userData: IUser | null;
    userCart: ICart | null;
  };
  isLoading: boolean;
}

export const UserContext = createContext<UserContextType>({
  data: {
    userData: null,
    userCart: null,
  },
  isLoading: true,
});

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading } = useGetUser();

  // defaults for userData and userCart in case data is undefined
  const userData = data?.userData ?? null;
  const userCart = data?.userCart ?? null;

  return (
    <UserContext.Provider value={{ data: { userData, userCart }, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};
