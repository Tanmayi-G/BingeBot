import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((store: RootState) => store.user);

  if (!user) {
    navigate("/");
    return null;
  }

  return (
    <div className="relative">
      <Header />

      {/* Page content here */}
      <div className="pt-32 text-center text-3xl font-bold">
        Welcome to Browse!
      </div>
    </div>
  );
};

export default Browse;
