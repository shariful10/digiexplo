"use client";

import useAuth from "@/hooks/useAuth";
import React, { useMemo } from "react";

const page = () => {
  const { user, loading } = useAuth();

  console.log(user);

  return (
    <div>
      <h2>{loading ? "Loading" : user?.name.firstName}</h2>
      <p>{loading ? "Loading" : user?.username}</p>
    </div>
  );
};

export default page;
