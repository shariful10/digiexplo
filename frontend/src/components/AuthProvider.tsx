// UserProvider.tsx
import React, { createContext, useContext } from "react";
import { IUser } from "./types";
import { useUserData } from "@/lib/getUserData";

interface UserContextType {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: user, isLoading, isError } = useUserData();
  const [userData, setUserData] = React.useState<IUser | null>(null);

  React.useEffect(() => {
    if (!isLoading && !isError) {
      setUserData(user);
    }
  }, [user, isLoading, isError]);

  return (
    <UserContext.Provider
      value={{ user: userData, setUser: setUserData, isLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};
