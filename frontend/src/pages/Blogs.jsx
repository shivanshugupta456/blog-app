import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Blogs() {
  const { blogs } = useAuth();

  return (
    <div className="bg-[radial-gradient(circle_at_top,#dbeafe_0%,#f8fafc_42%,#ecfccb_100%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-600">
              Editorial Feed
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-900">
              Explore every story in one premium grid
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              Discover category-led posts, rich cover visuals, and a cleaner
              reading entry point across the entire blog collection.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 shadow-sm">
            Total posts: <span className="font-semibold text-slate-900">{blogs?.length || 0}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {blogs && blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <Link
                to={`/blog/${blog.id}`}
                key={index}
                className="group overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/80 shadow-[0_20px_70px_rgba(148,163,184,0.16)] transition duration-300 hover:-translate-y-1"
              >
                <img
                  src={blog?.blogImage?.url}
                  alt={blog?.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="p-6">
                  <div className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
                    {blog?.category}
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold text-slate-900">
                    {blog?.title}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-500">
                    {blog?.about}
                  </p>
                  <div className="mt-5 text-sm font-semibold text-slate-900">
                    Read article
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white/70 p-12 text-center text-slate-500">
              No blogs available right now.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
