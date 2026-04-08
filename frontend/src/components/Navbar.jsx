import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { BACKEND_URL } from "../utils";

function Navbar() {
  const [show, setShow] = useState(false);
  const { profile, isAuthenticated, setIsAuthenticated } = useAuth();
  const user = profile?.user || profile;
  const navigateTo = useNavigate();
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/blogs", label: "Blogs" },
    { to: "/creators", label: "Creators" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`${BACKEND_URL}/api/users/logout`, {
        withCredentials: true,
      });
      localStorage.removeItem("jwt");
      toast.success(data.message);
      setIsAuthenticated(false);
      navigateTo("/login");
    } catch (error) {
      console.log(error);
      toast.error("Failed to logout");
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/50 bg-white/75 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link to="/" className="font-semibold text-2xl text-slate-950">
            Cilli<span className="text-sky-600">Blog</span>
          </Link>

          <div className="hidden items-center rounded-full border border-slate-200 bg-white/85 px-3 py-2 shadow-sm md:flex md:gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
                  location.pathname === link.to
                    ? "bg-slate-950 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            {isAuthenticated && user?.role === "admin" && (
              <Link
                to="/dashboard"
                className="rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-sky-700"
              >
                Dashboard
              </Link>
            )}

            {!isAuthenticated ? (
              <Link
                to="/login"
                className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-rose-600"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="rounded-full border border-rose-200 bg-rose-50 px-5 py-3 text-sm font-semibold text-rose-600 transition duration-300 hover:bg-rose-100"
              >
                Logout
              </button>
            )}
          </div>

          <button
            className="rounded-2xl border border-slate-200 bg-white p-3 text-slate-900 shadow-sm md:hidden"
            onClick={() => setShow(!show)}
          >
            {show ? <IoCloseSharp size={22} /> : <AiOutlineMenu size={22} />}
          </button>
        </div>
      </nav>

      {show && (
        <div className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-[2px] md:hidden" onClick={() => setShow(false)}>
          <div
            className="absolute right-4 top-20 w-[calc(100%-2rem)] max-w-sm rounded-[1.75rem] border border-white/60 bg-white/95 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.22)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setShow(false)}
                  className={`block rounded-2xl px-4 py-3 text-sm font-semibold transition duration-300 ${
                    location.pathname === link.to
                      ? "bg-slate-950 text-white"
                      : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-3">
              {isAuthenticated && user?.role === "admin" && (
                <Link
                  to="/dashboard"
                  onClick={() => setShow(false)}
                  className="rounded-2xl bg-sky-600 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Dashboard
                </Link>
              )}

              {!isAuthenticated ? (
                <Link
                  to="/login"
                  onClick={() => setShow(false)}
                  className="rounded-2xl bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Login
                </Link>
              ) : (
                <button
                  onClick={(e) => {
                    setShow(false);
                    handleLogout(e);
                  }}
                  className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-600"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
