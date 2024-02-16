"use client";

import React, { useEffect, useState } from "react";
import { auth } from "@/lib/auth";
import { IUser } from "../types";

type Props = {
  iat: string;
  user: IUser;
};

const UserPage = () => {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await auth.getUser();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  console.log(user);

  return (
    <div>
      <h1>User Page</h1>
    </div>
  );
};

export default UserPage;
