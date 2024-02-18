// UserContext.tsx
"use client";

import { useGetUser } from "@/lib/getUserData";
import React, { createContext, useContext, useState } from "react";

interface Name {
  lastName: string;
  firstName: string;
}

interface User {
  _id: string;
  name: Name;
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
  user: User | null;
}

const UserContext = createContext<UserContextType>({
  user: null,
});

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { data, isLoading } = useGetUser();

  console.log({ data: data, isLoading: isLoading });

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
