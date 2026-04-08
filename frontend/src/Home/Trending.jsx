import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Trending() {
  const { blogs } = useAuth();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="section-reveal px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-600">
              Trending Now
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-slate-900">
              Stories readers notice first
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              Swipe through standout categories, refined cards, and creator-led
              articles that deserve the spotlight.
            </p>
          </div>
        </div>
        <Carousel responsive={responsive}>
          {blogs && blogs.length > 0 ? (
            blogs.slice(0, 6).map((element) => {
              return (
                <div
                  key={element._id}
                  className="mx-2 overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/85 shadow-[0_18px_60px_rgba(148,163,184,0.16)]"
                >
                  <Link to={`/blog/${element._id}`}>
                    <div className="relative">
                      <img
                        src={element.blogImage.url}
                        alt="blog"
                        className="h-56 w-full object-cover"
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-900">
                        {element.category}
                      </div>
                    </div>
                    <div className="flex h-40 flex-col justify-between bg-white p-5">
                      <h3 className="line-clamp-2 text-xl font-semibold text-slate-900">
                        {element.title}
                      </h3>
                      <div className="flex items-center">
                        <img
                          src={element.adminPhoto}
                          alt="author_avatar"
                          className="h-10 w-10 rounded-2xl object-cover"
                        />
                        <p className="ml-3 text-sm text-slate-500">
                          {element.adminName}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
            <div className="mx-2 overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/85 p-4 shadow-[0_18px_60px_rgba(148,163,184,0.16)]">
              <div className="loading-sheen h-56 rounded-[1.2rem]" />
              <div className="mt-4 space-y-3">
                <div className="loading-sheen h-5 w-24 rounded-full" />
                <div className="loading-sheen h-7 w-full rounded-2xl" />
                <div className="loading-sheen h-7 w-4/5 rounded-2xl" />
              </div>
            </div>
          )}
        </Carousel>
      </div>
    </section>
  );
}

export default Trending;
