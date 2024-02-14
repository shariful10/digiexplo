// UserContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { JWT_ACCESS_SECRET } from "../helper";
import jwt from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";

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

  useEffect(() => {
    const userToken = localStorage.getItem("digitalization");

    if (userToken) {
      const decoded = jwtDecode<User>(userToken);

      const mappedUser: User = {
        _id: decoded._id,
        name: decoded.name,
        username: decoded.username,
        email: decoded.email,
        password: decoded.password,
        phone: decoded.phone,
        profileImg: decoded.profileImg,
        role: decoded.role,
        status: decoded.status,
        isDeleted: decoded.isDeleted,
        vendor: decoded.vendor,
        cart: decoded.cart,
        buyedProducts: decoded.buyedProducts,
      };

      setUser(mappedUser);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
