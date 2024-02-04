"use client";

import useAuth from "@/hooks/useAuth";
import React, { useMemo } from "react";

const page = () => {
  const { user } = useAuth();

  const memoizedUser = useMemo(() => user, [user]);

  console.log(memoizedUser);

  return <div>Hello Users</div>;
};

export default page;
