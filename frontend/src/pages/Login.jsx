import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { BACKEND_URL } from "../utils";

function Login() {
  const { setIsAuthenticated, setProfile } = useAuth();

  const navigateTo = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${BACKEND_URL}/api/users/login`,
        { email, password, role },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      // Store the token in localStorage
      localStorage.setItem("jwt", data.token); // storing token in localStorage so that if user refreshed the page it will not redirect again in login
      toast.success(data.message || "User Logined successfully", {
        duration: 3000,
      });
      setProfile(data);
      setIsAuthenticated(true);
      setEmail("");
      setPassword("");
      setRole("");
      navigateTo("/");
    } catch (error) {
      console.log(error);
      toast.error(
        error.response.data.message || "Please fill the required fields",
        {
          duration: 3000,
        }
      );
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#dbeafe_0%,#f8fafc_38%,#e2e8f0_100%)] px-4 py-10">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl overflow-hidden rounded-[2rem] border border-white/60 bg-white/75 shadow-[0_30px_120px_rgba(15,23,42,0.18)] backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative hidden overflow-hidden bg-slate-950 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.35),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.2),transparent_30%)]" />
          <div className="relative">
            <p className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-slate-200">
              Editorial Access
            </p>
            <div className="font-semibold text-3xl">
              Cilli<span className="text-sky-300">Blog</span>
            </div>
            <h1 className="mt-8 max-w-md text-4xl font-semibold leading-tight">
              Welcome back to your publishing command center.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300">
              Manage stories, track your audience, and keep your creative workflow
              flowing from one refined space.
            </p>
          </div>
          <div className="relative grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5">
              <p className="text-sm text-slate-300">Trusted workflow</p>
              <p className="mt-2 text-lg font-medium">
                Write, review, and publish with a calm, premium dashboard feel.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-slate-200">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-2xl font-semibold">24/7</p>
                <p className="mt-1 text-slate-300">Creator access</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-2xl font-semibold">1 Tap</p>
                <p className="mt-1 text-slate-300">Quick publishing</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12">
          <form
            onSubmit={handleLogin}
            className="w-full max-w-md rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_20px_80px_rgba(148,163,184,0.22)]"
          >
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-600">
              Sign In
            </p>
            <div className="mt-3 font-semibold text-3xl text-slate-900">
              Access your account
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Continue to your dashboard and keep your content pipeline moving.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition duration-300 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                >
                  <option value="">Select Role</option>
                  <option value="user">user</option>
                  <option value="admin">admin</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition duration-300 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition duration-300 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-sky-600"
            >
              Login
            </button>

            <p className="mt-6 text-center text-sm text-slate-500">
              New here?{" "}
              <Link
                to={"/register"}
                className="font-semibold text-sky-600 transition hover:text-slate-900"
              >
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
