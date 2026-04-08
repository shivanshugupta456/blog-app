import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Devotional() {
  const { blogs } = useAuth();
  const devotionalBlogs = blogs?.filter((blog) => blog.category === "Devotion");

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,#fffdf5_0%,#ffffff_100%)] p-6 shadow-[0_24px_90px_rgba(148,163,184,0.14)] sm:p-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-500">
            Devotional Collection
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-slate-900">
            Calm, reflective stories with a richer presentation
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500">
            A dedicated space for spiritually themed writing, brought together
            in a softer visual rhythm with strong cover imagery.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {devotionalBlogs && devotionalBlogs.length > 0 ? (
            devotionalBlogs.map((blog, index) => (
              <Link
                to={`/blog/${blog._id}`}
                key={index}
                className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(148,163,184,0.16)] transition duration-300 hover:-translate-y-1"
              >
                <img
                  src={blog?.blogImage?.url}
                  alt={blog?.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="p-5">
                  <div className="inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                    {blog?.category}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">
                    {blog?.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-500">
                    {blog?.about}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full flex min-h-[14rem] items-center justify-center rounded-[1.5rem] border border-dashed border-slate-300 bg-white/70 text-slate-500">
              Loading...
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Devotional;
