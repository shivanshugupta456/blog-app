import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,#dbeafe_0%,#f8fafc_42%,#fef3c7_100%)] px-4">
      <div className="max-w-xl rounded-[2rem] border border-white/70 bg-white/80 p-10 text-center shadow-[0_30px_120px_rgba(15,23,42,0.14)] backdrop-blur-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-600">
          404 Error
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">
          Page not found
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-500">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-sky-600"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
