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
    const userData = auth.getUser();

    setUser(userData);
  }, []);

  console.log(user);

  return (
    <div>
      <h1>User Page</h1>
    </div>
  );
};

export default UserPage;
