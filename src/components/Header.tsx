import logo from "../assets/logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store: RootState) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black opacity-90 h-50 z-0" />
      <img src={logo} alt="Logo" className="w-40 relative z-10" />

      {user && (
        <div className="absolute top-10 right-10 flex items-center space-x-4 z-10">
          <img
            src={user?.photoURL ?? ""}
            alt="User Icon"
            className="w-12 h-12 rounded-lg border-1 border-white"
          />
          <button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
