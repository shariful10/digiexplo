import { useContext } from "react";
import { AuthContext } from "@/components/Provider/AuthProviderWorking";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useApi must be used within an ApiProvider");
  }
  return context;
};

export default useAuth;
