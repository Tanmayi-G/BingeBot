import Header from "./Header";
import banner from "../assets/banner.jpg";
import { useRef, useState } from "react";
import { validateForm, type ValidationErrors } from "../utils/validateFormData";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { getAuthErrorDescription } from "../utils/getAuthErrorDescription";
import userIcon from "../assets/userIcon.jpg";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState<boolean>(true);
  const [formErrors, setFormErrors] = useState<ValidationErrors>({});
  const [authError, setAuthError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setAuthError(null);
  };

  const handleButtonClick = () => {
    //From validation
    const nameVal = name.current?.value || "";
    const emailVal = email.current?.value || "";
    const passwordVal = password.current?.value || "";

    const errors = validateForm(
      emailVal,
      passwordVal,
      isSignInForm ? null : nameVal
    );
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;

    //User Authentication
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, emailVal, passwordVal)
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: nameVal,
            photoURL: userIcon,
          })
            .then(() => {
              const currentUser = auth.currentUser;
              if (currentUser) {
                const { uid, email, displayName, photoURL } = currentUser;
                dispatch(
                  addUser({
                    uid,
                    email,
                    displayName,
                    photoURL,
                  })
                );
                setAuthError(null);
              }
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorDescription = getAuthErrorDescription(errorCode);
              setAuthError(errorDescription);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorDescription = getAuthErrorDescription(errorCode);
          setAuthError(errorDescription);
        });
    } else {
      signInWithEmailAndPassword(auth, emailVal, passwordVal)
        .then((userCredential) => {
          const user = userCredential.user;
          setAuthError(null);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorDescription = getAuthErrorDescription(errorCode);
          setAuthError(errorDescription);
        });
    }
  };

  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <img
        src={banner}
        alt="Banner"
        className="w-full h-full object-cover absolute inset-0"
      />

      {/* Header */}
      <div className="relative z-10">
        <Header />
      </div>

      {/* Form */}
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-3/12 p-12 bg-[rgba(0,0,0,0.8)] text-white rounded-lg"
        >
          <h1 className="text-3xl font-bold pb-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <>
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="my-3 p-3 w-full bg-white/30 border-gray-400 rounded-md font-medium"
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm -mt-2">{formErrors.name}</p>
              )}
            </>
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email address"
            className="my-3 p-3 w-full bg-white/30 border-gray-400 rounded-md font-medium"
          />
          {formErrors.email && (
            <p className="text-red-500 text-sm -mt-2">{formErrors.email}</p>
          )}

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="my-3 p-3 w-full bg-white/30 border-gray-400 rounded-md font-medium"
          />
          {formErrors.password && (
            <p className="text-red-500 text-sm -mt-2">{formErrors.password}</p>
          )}

          {authError && (
            <p className="text-red-500 text-sm mt-2">{authError}</p>
          )}

          <button
            className="my-5 p-3 w-full bg-red-700 rounded-md font-medium cursor-pointer"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          {isSignInForm ? (
            <p className="my-3">
              New to BingeBot?{" "}
              <span
                className="cursor-pointer font-bold"
                onClick={toggleSignInForm}
              >
                Sign up now!
              </span>
            </p>
          ) : (
            <p className="my-3">
              Already have an account?{" "}
              <span
                className="cursor-pointer font-bold"
                onClick={toggleSignInForm}
              >
                Sign in now!
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
