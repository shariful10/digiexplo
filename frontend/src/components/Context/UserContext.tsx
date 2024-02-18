// UserContext.tsx
"use client";

import { useGetUser } from "@/lib/getUserData";
import React, { createContext, useContext, useState } from "react";

interface User {
  _id: string;
  lastName: string;
  firstName: string;
  username: string;
  email: string;
  password: string;
  phone: string;
  profileImg: string;
  // verificationID?: string;
  role: string;
  status: string;
  isDeleted: boolean;
  vendor: string;
  cart: string;
  buyedProducts: [];
}

interface UserContextType {
  data: User | null;
  isLoading: boolean;
}

export const UserContext = createContext<UserContextType>({
  data: null,
  isLoading: false,
});

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading } = useGetUser();

  return (
    <UserContext.Provider value={{ data, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};
