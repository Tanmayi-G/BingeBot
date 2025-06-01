import Header from "./Header";
import banner from "../assets/banner.jpg";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <img
        src={banner}
        alt="Banner"
        className="w-full h-full object-cover absolute inset-0"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black opacity-60" />

      {/* Header */}
      <div className="relative z-10">
        <Header />
      </div>

      {/* Form */}
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <form className="w-3/12 p-12 bg-[rgba(0,0,0,0.8)] text-white rounded-lg">
          <h1 className="text-3xl font-bold pb-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="my-3 p-3 w-full bg-white/30  border-gray-400 rounded-md font-medium"
            />
          )}
          <input
            type="text"
            placeholder="Email or mobile number"
            className="my-3 p-3 w-full bg-white/30  border-gray-400 rounded-md font-medium"
          />
          <input
            type="password"
            placeholder="Password"
            className="my-3 p-3 w-full bg-white/30  border-gray-400 rounded-md font-medium"
          />
          <button className="my-5 p-3 w-full bg-red-700 rounded-md font-medium">
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
