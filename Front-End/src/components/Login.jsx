import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const [input, setinput] = useState({
    email: "",
    password: "",
  });

  const changehandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/login",
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.success(error.response.data.message);
    }
  };
  return (
    <div className="flex items-center justify-center w-screen mt-10">
      <form
        onSubmit={submithandler}
        className="flex flex-col gap-3 bg-white p-4 w-[25%] rounded-md"
      >
        <h1 className="font-bold uppercase text-center text-2xl">Login</h1>
        <input
          onChange={changehandler}
          value={input.email}
          name="email"
          type="email"
          placeholder="Name"
          className="border border-gray-400 rounded-md px-2 py-2"
        />
        <input
          onChange={changehandler}
          value={input.password}
          name="password"
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
        <p className="text-center">
          Don't have an account?
          <Link to={"/signup"} className="text-blue-700">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
