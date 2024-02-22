import UserPage from "@/components/UserPage/UserPage";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const page = () => {
  return (
    <div>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <p>
          <Skeleton />
        </p>
      </SkeletonTheme>
    </div>
  );
};

export default page;
