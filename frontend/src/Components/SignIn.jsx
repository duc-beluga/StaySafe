import React, { useRef } from "react";
import "tailwindcss/tailwind.css";

const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    if (emailRef !== null && passwordRef !== null) {
      console.log(emailRef.current.value);
      console.log(passwordRef.current.value);
    }
  };

  return (
    <form onSubmit={handleSignInSubmit} className="flex-1 flex flex-col mt-10">
      <div className="p-3 font-normal text-5xl">Welcome to our</div>
      <div className="p-3 font-normal text-5xl mb-8">Housing Community</div>
      <label htmlFor="email" className="p-2 font-semibold ">
        Email
      </label>
      <input
        id="email"
        ref={emailRef}
        type="text"
        className="p-3 rounded-md mr-40 ml-2 border border-gray-700 mb-10"
      ></input>
      <label htmlFor="password" className="p-2 font-semibold">
        Password
      </label>
      <input
        id="password"
        ref={passwordRef}
        type="text"
        className="p-3 rounded-md mr-40 ml-2 border border-gray-700"
      ></input>
      <div className="flex justify-end">
        <a href="#" className="p-3 mr-40 text-blue-700 mt-3 mb-3">
          Forget password?
        </a>
      </div>
      <button className="bg-blue-400 h-12 mr-40 rounded-3xl ml-2 font-semibold text-lg text-white mb-10">
        Sign In
      </button>
      <button className="white h-12 mr-40 rounded-3xl ml-2 font-semibold text-lg border border-gray-700">
        New to StaySafe? Join now
      </button>
    </form>
  );
};

export default SignIn;
