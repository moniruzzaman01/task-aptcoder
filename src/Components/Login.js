import React from "react";

const Login = () => {
  return (
    <div className=" w-1/2 mx-auto mt-20">
      <h1 className=" text-4xl font-bold mb-10">Login</h1>
      <form action="">
        <input
          type="email"
          name="email"
          placeholder="Email"
          class="input input-bordered input-primary w-full max-w-lg mb-5"
        />
        <input
          type="password"
          name="pass"
          placeholder="Password"
          class="input input-bordered input-primary w-full max-w-lg mb-2"
        />
        <p className=" text-left mb-5">New Here? Create an account.</p>
        <button className=" btn btn-primary px-10">Login</button>
      </form>
      <div class="flex flex-col w-full border-opacity-50">
        <div class="divider">OR</div>
      </div>
      <button className=" btn btn-secondary px-10">Google Login</button>
    </div>
  );
};

export default Login;
