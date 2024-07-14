import React from "react";
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="flex items-center justify-center w-screen mt-10">
      <form
        action=""
        className="flex flex-col gap-3 bg-white p-4 w-[25%] rounded-md"
      >
        <h1 className="font-bold uppercase text-center text-2xl">
          Signup
        </h1>
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-400 rounded-md px-2 py-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-400 rounded-md px-2 py-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-400 rounded-md px-2 py-2"
        />
        <button
          type="submit"
          className="bg-blue-700 rounded-md px-2 py-2 text-white"
        >
          signup
        </button>
        <p className="text-center">
          Already have an account?<Link to={"/login"} className="text-blue-700">login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
