import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../utils";

function Detail() {
  const { id } = useParams();
  const [blogs, setblogs] = useState({});

  useEffect(() => {
    const fetchblogs = async () => {
      try {
        const { data } = await axios.get(
          `${BACKEND_URL}/api/blogs/single-blog/${id}`,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setblogs(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchblogs();
  }, [id]);

  return (
    <div className="bg-[radial-gradient(circle_at_top,#dbeafe_0%,#f8fafc_42%,#fef3c7_100%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {blogs && (
          <section className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_30px_120px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-sky-600">
              {blogs?.category}
            </div>
            <h1 className="mb-6 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              {blogs?.title}
            </h1>
            <div className="mb-8 flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <img
                src={blogs?.adminPhoto}
                alt="author_avatar"
                className="h-14 w-14 rounded-2xl object-cover"
              />
              <div>
                <p className="text-lg font-semibold text-slate-900">
                  {blogs?.adminName}
                </p>
                <p className="text-sm text-slate-500">Article author</p>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              {blogs?.blogImage && (
                <img
                  src={blogs?.blogImage?.url}
                  alt="mainblogsImg"
                  className="h-[420px] w-full rounded-[1.75rem] border border-slate-200 object-cover shadow-lg"
                />
              )}
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(148,163,184,0.14)]">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
                  Article Insight
                </p>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {blogs?.about}
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default Detail;
