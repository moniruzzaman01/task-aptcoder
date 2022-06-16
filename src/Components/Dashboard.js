import { signOut } from "firebase/auth";
import React from "react";
import auth from "../firebase.init";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className=" h-[7vh] w-full bg-slate-600 flex items-center justify-between">
        <h1 className=" flex items-center justify-center h-[7vh] w-[20vw] text-3xl font-bold text-white">
          Logo
        </h1>
        <div className=" md:hidden lg:hidden flex gap-2">
          <p>
            <Link to="/dashboard/charts">Charts</Link>
          </p>
          <p>
            <Link to="/dashboard/list">Employee List</Link>
          </p>
        </div>
        <button
          onClick={() => signOut(auth)}
          className=" btn btn-ghost mr-5 text-white"
        >
          Logout
        </button>
      </div>
      <div className=" flex">
        <div className=" h-[93vh] w-[20vw] bg-slate-600 py-10 hidden md:block lg:block">
          <p>
            <Link to="/dashboard/charts">Charts</Link>
          </p>
          <p>
            <Link to="/dashboard/list">Employee List</Link>
          </p>
        </div>
        <div className=" w-full md:w-[80vw] lg:w-[80vw]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
