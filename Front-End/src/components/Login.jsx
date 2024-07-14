import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center w-screen mt-10">
      <form
        action=""
        className="flex flex-col gap-3 bg-white p-4 w-[25%] rounded-md"
      >
        <h1 className="font-bold uppercase text-center text-2xl">
          Login
        </h1>
        <input
          type="text"
          placeholder="Name"
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
