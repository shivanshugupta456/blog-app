import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CiMenuBurger } from "react-icons/ci";
import { BiSolidLeftArrowAlt } from "react-icons/bi";
import toast from "react-hot-toast";
import { BACKEND_URL } from "../utils";

function Sidebar({ component, setComponent }) {
  const { profile, setIsAuthenticated } = useAuth();
  const user = profile?.user || profile;
  const navigateTo = useNavigate();

  const [show, setShow] = useState(false);

  const handleComponents = (value) => {
    setComponent(value);
  };
  const gotoHome = () => {
    navigateTo("/");
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `${BACKEND_URL}/api/users/logout`,
        { withCredentials: true }
      );
      toast.success(data.message);
       localStorage.removeItem("jwt"); // deleting token in localStorage so that if user logged out it will goes to login page
      setIsAuthenticated(false);
      navigateTo("/login");
    } catch (error) {
      console.log(error);
      toast.error(error.data.message || "Failed to logout");
    }
  };

  return (
    <>
      <div
        className="fixed left-5 top-5 z-50 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg sm:hidden"
        onClick={() => setShow(!show)}
      >
        <CiMenuBurger className="text-2xl text-slate-800" />
      </div>
      {show && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-[2px] sm:hidden"
          onClick={() => setShow(false)}
        />
      )}
      <div
        className={`fixed left-0 top-0 z-50 h-full w-[290px] border-r border-white/10 bg-[linear-gradient(180deg,#0f172a_0%,#172554_100%)] p-5 text-white shadow-2xl transition-transform duration-300 sm:static sm:z-auto sm:h-auto sm:w-auto sm:translate-x-0 sm:rounded-[1.75rem] sm:border sm:border-slate-200/80 ${
          show ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className="sm:hidden absolute top-4 right-4 text-xl cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <BiSolidLeftArrowAlt className="text-2xl" />
        </div>
        <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 text-center shadow-[0_20px_60px_rgba(15,23,42,0.35)]">
          <img
            className="mx-auto mb-3 h-24 w-24 rounded-full border-4 border-white/20 object-cover"
            src={user?.photo?.url}
            alt={user?.name || "profile"}
          />
          <p className="text-lg font-semibold">{user?.name || "Creator"}</p>
          <p className="mt-1 text-sm text-slate-300">{user?.email}</p>
          <div className="mt-4 inline-flex rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-sky-200">
            {user?.role || "user"}
          </div>
        </div>
        <ul className="mt-6 space-y-3">
          <button
            onClick={() => handleComponents("My Blogs")}
            className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold transition duration-300 ${
              component === "My Blogs"
                ? "bg-white text-slate-950 shadow-lg"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            My Blogs
          </button>
          <button
            onClick={() => handleComponents("Create Blog")}
            className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold transition duration-300 ${
              component === "Create Blog"
                ? "bg-white text-slate-950 shadow-lg"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            Create Blog
          </button>
          <button
            onClick={() => handleComponents("My Profile")}
            className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold transition duration-300 ${
              component === "My Profile"
                ? "bg-white text-slate-950 shadow-lg"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            My Profile
          </button>
          <button
            onClick={gotoHome}
            className="w-full rounded-2xl bg-amber-300 px-4 py-3 text-left text-sm font-semibold text-slate-950 transition duration-300 hover:bg-amber-200"
          >
            Home
          </button>
          <button
            onClick={handleLogout}
            className="w-full rounded-2xl bg-rose-500 px-4 py-3 text-left text-sm font-semibold text-white transition duration-300 hover:bg-rose-400"
          >
            Logout
          </button>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
