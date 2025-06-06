import logo from "../assets/logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { clearGptResults, toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store: RootState) => store.user);
  const showGptSearch = useSelector(
    (store: RootState) => store.gpt?.showGptSearch
  );

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  };

  const toggleGptSearch = () => {
    dispatch(toggleGptSearchView());
    dispatch(clearGptResults());
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full z-20 bg-gradient-to-b  from-black to-transparent flex justify-between items-center px-2 ">
      <img src={logo} alt="Logo" className="w-40" />

      {user && (
        <div className="flex items-center space-x-4">
          {showGptSearch && (
            <select
              className="p-2 mr-4 bg-gray-900 text-white rounded-lg cursor-pointer"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={toggleGptSearch}
            className="bg-gradient-to-l from-purple-600 via-pink-500 to-red-500 text-white font-semibold  px-5 py-2 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            {showGptSearch ? "Continue watching" : "Find your next Binge ✨"}
          </button>

          <img
            src={user?.photoURL ?? null}
            alt="User Icon"
            className="w-12 h-12 rounded-lg border border-white"
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
