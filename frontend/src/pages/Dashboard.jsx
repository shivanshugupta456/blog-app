import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import Sidebar from "../dashboard/Sidebar";
import MyProfile from "../dashboard/MyProfile";
import MyBlogs from "../dashboard/MyBlogs";
import CreateBlog from "../dashboard/CreateBlog";
import UpdateBlog from "../dashboard/UpdateBlog";
import { Navigate } from "react-router-dom";

function Dashboard() {
  const { profile, isAuthenticated } = useAuth();
  const [component, setComponent] = useState("My Blogs");
  const user = profile?.user || profile;

  if (!isAuthenticated) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#e0f2fe_0%,#f8fafc_45%,#fef3c7_100%)] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/70 bg-white/70 shadow-[0_30px_120px_rgba(15,23,42,0.16)] backdrop-blur-xl">
        <div className="border-b border-slate-200/80 px-6 py-6 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-600">
            Creator Dashboard
          </p>
          <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-slate-900">
                Welcome back, {user?.name || "Creator"}
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Manage your profile, shape your stories, and keep your publishing
                workflow running from one premium workspace.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:w-fit">
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Active View
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-800">
                  {component}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Role
                </p>
                <p className="mt-1 text-sm font-semibold capitalize text-slate-800">
                  {user?.role || "user"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:p-8">
          <Sidebar component={component} setComponent={setComponent} />
          <div className="rounded-[1.75rem] border border-slate-200/80 bg-white/85 p-4 shadow-[0_20px_70px_rgba(148,163,184,0.16)] sm:p-6">
            {component === "My Profile" ? (
              <MyProfile />
            ) : component === "Create Blog" ? (
              <CreateBlog />
            ) : component === "Update Blog" ? (
              <UpdateBlog />
            ) : (
              <MyBlogs />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
