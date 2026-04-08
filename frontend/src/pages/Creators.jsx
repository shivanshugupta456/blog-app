import axios from "axios";
import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../utils";

function Creators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const { data } = await axios.get(`${BACKEND_URL}/api/users/admins`, {
          withCredentials: true,
        });
        setCreators(data.admins);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCreators();
  }, []);

  return (
    <div className="bg-[radial-gradient(circle_at_top,#e0f2fe_0%,#f8fafc_42%,#fce7f3_100%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-600">
            Creators
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900">
            Meet the editorial voices behind the platform
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500">
            Explore the people shaping content, perspective, and creative energy
            across the blog experience.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {creators.map((creator) => (
            <div
              key={creator._id}
              className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/85 shadow-[0_20px_70px_rgba(148,163,184,0.16)]"
            >
              <div className="relative h-40 bg-[linear-gradient(135deg,#0f172a_0%,#0369a1_70%,#f59e0b_100%)]">
                <img
                  src={creator.photo.url}
                  alt="avatar"
                  className="h-full w-full object-cover opacity-65 mix-blend-overlay"
                />
                <div className="absolute inset-x-0 bottom-0 translate-y-1/2">
                  <img
                    src={creator.photo.url}
                    alt="avatar"
                    className="mx-auto h-20 w-20 rounded-3xl border-4 border-white object-cover shadow-xl"
                  />
                </div>
              </div>
              <div className="px-6 pb-6 pt-14">
                <h2 className="text-center text-2xl font-semibold text-slate-900">
                  {creator.name}
                </h2>
                <p className="mt-2 text-center text-sm text-slate-500">
                  {creator.email}
                </p>
                <p className="mt-2 text-center text-sm text-slate-500">
                  {creator.phone}
                </p>
                <div className="mt-4 text-center">
                  <span className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
                    {creator.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
          {creators.length === 0 && (
            <div className="col-span-full rounded-[1.75rem] border border-dashed border-slate-300 bg-white/70 p-12 text-center text-slate-500">
              No creators available right now.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Creators;
