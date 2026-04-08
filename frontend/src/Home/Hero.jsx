import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Hero() {
  const { blogs } = useAuth();

  return (
    <section className="px-4 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/70 bg-[radial-gradient(circle_at_top,#ecfeff_0%,#f8fafc_50%,#ffffff_100%)] shadow-[0_30px_120px_rgba(15,23,42,0.12)]">
        <div className="grid gap-6 p-6 lg:grid-cols-[1.08fr_0.92fr] lg:p-8">
          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#020617_0%,#0f172a_45%,#0369a1_100%)] p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.28)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-200">
              Featured Stories
            </p>
            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
              Read modern stories with a cleaner, more premium editorial feel.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
              Explore creator-led articles, polished cover imagery, and category
              driven discovery designed to make the whole platform feel more
              intentional.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:max-w-md">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-2xl font-semibold">{blogs?.length || 0}</p>
                <p className="mt-1 text-sm text-slate-300">Stories available</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-2xl font-semibold">Curated</p>
                <p className="mt-1 text-sm text-slate-300">Premium reading flow</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {blogs && blogs.length > 0 ? (
              blogs.slice(0, 4).map((element) => (
                <Link
                  to={`/blog/${element._id}`}
                  key={element._id}
                  className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(148,163,184,0.18)] transition duration-300 hover:-translate-y-1"
                >
                  <div className="relative">
                    <img
                      src={element.blogImage.url}
                      alt={element.title}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-900">
                      {element.category}
                    </div>
                    <h2 className="absolute bottom-4 left-4 right-4 text-xl font-semibold leading-snug text-white">
                      {element.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-3 p-4">
                    <img
                      src={element.adminPhoto}
                      alt={element.adminName}
                      className="h-11 w-11 rounded-2xl object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {element.adminName}
                      </p>
                      <p className="text-xs text-slate-500">Featured author</p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full flex min-h-[20rem] items-center justify-center rounded-[1.5rem] border border-dashed border-slate-300 bg-white/70 text-slate-500">
                Loading...
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
