import React from "react";
import SocialLogin from "./SocialLogin";

const Login = () => {
  return (
    <div className=" w-full px-5 lg:w-1/2 mx-auto mt-20">
      <h1 className=" text-4xl font-bold mb-10">Login</h1>
      <form action="">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered input-primary w-full max-w-lg mb-5"
        />
        <input
          type="password"
          name="pass"
          placeholder="Password"
          className="input input-bordered input-primary w-full max-w-lg mb-2"
        />
        <p className=" text-left mb-5">New Here? Create an account.</p>
        <button className=" btn btn-primary px-10">Login</button>
      </form>
      <SocialLogin />
    </div>
  );
};

export default Login;
