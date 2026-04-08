import React from "react";
import { useAuth } from "../context/AuthProvider";

function MyProfile() {
  const { profile } = useAuth();
  const user = profile?.user || profile;

  return (
    <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
      <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(148,163,184,0.18)]">
        <div className="relative h-56 bg-[linear-gradient(135deg,#0f172a_0%,#0369a1_55%,#f59e0b_100%)]">
          {user?.photo?.url && (
            <img
              src={user?.photo?.url}
              alt="avatar"
              className="h-full w-full object-cover mix-blend-overlay opacity-60"
            />
          )}
          <div className="absolute left-8 top-8 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-sm">
            My Profile
          </div>
        </div>
        <div className="relative px-6 pb-8 pt-16 sm:px-8">
          <div className="absolute -top-12 left-8">
            <img
              src={user?.photo?.url}
              alt="avatar"
              className="h-24 w-24 rounded-3xl border-4 border-white object-cover shadow-xl"
            />
          </div>
          <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">
                {user?.name || "Creator"}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Your public creator identity and account information live here.
              </p>
            </div>
            <div className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold capitalize text-sky-700">
              {user?.role || "user"}
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Email
              </p>
              <p className="mt-2 text-sm font-medium text-slate-700">
                {user?.email || "Not available"}
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Phone
              </p>
              <p className="mt-2 text-sm font-medium text-slate-700">
                {user?.phone || "Not available"}
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 sm:col-span-2">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Education
              </p>
              <p className="mt-2 text-sm font-medium text-slate-700">
                {user?.education || "Not available"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(135deg,#082f49,#0f172a)] p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.24)]">
          <p className="text-xs uppercase tracking-[0.3em] text-sky-200">
            Profile Snapshot
          </p>
          <h3 className="mt-3 text-2xl font-semibold">
            A clean author identity builds trust faster.
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Keep your profile photo, contact details, and role polished so your
            dashboard feels consistent with the quality of your content.
          </p>
        </div>
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(148,163,184,0.18)]">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-500">
            Identity
          </p>
          <div className="mt-4 space-y-4">
            <div className="rounded-2xl bg-amber-50 p-4">
              <p className="text-sm font-semibold text-slate-800">Creator Name</p>
              <p className="mt-1 text-sm text-slate-600">{user?.name || "-"}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-800">Role Access</p>
              <p className="mt-1 text-sm capitalize text-slate-600">
                {user?.role || "-"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
