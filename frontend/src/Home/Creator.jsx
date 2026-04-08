import axios from "axios";
import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../utils";
import { Link } from "react-router-dom";

function Creator() {
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    const fetchAdmins = async () => {
      const { data } = await axios.get(`${BACKEND_URL}/api/users/admins`, {
        withCredentials: true,
      });
      setAdmin(data.admins);
    };
    fetchAdmins();
  }, []);

  return (
    <section className="px-4 pb-14 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-600">
              Popular Creators
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-slate-900">
              People shaping the voice of the platform
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              Discover the authors and admins who give the blog its tone,
              identity, and publishing energy.
            </p>
          </div>
          <Link
            to="/creators"
            className="inline-flex rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-sky-600"
          >
            View all creators
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {admin && admin.length > 0 ? (
            admin.slice(0, 4).map((element) => {
              return (
                <div
                  key={element._id}
                  className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/85 shadow-[0_20px_70px_rgba(148,163,184,0.16)]"
                >
                  <div className="relative h-40 bg-[linear-gradient(135deg,#0f172a_0%,#0369a1_70%,#f59e0b_100%)]">
                    <img
                      src={element.photo.url}
                      alt="blog"
                      className="h-full w-full object-cover opacity-65 mix-blend-overlay"
                    />
                    <div className="absolute inset-x-0 bottom-0 translate-y-1/2">
                      <img
                        src={element.photo.url}
                        alt={element.name}
                        className="mx-auto h-20 w-20 rounded-3xl border-4 border-white object-cover shadow-xl"
                      />
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-14 text-center">
                    <p className="text-xl font-semibold text-slate-900">
                      {element.name}
                    </p>
                    <p className="mt-2 text-sm text-slate-500">{element.email}</p>
                    <p className="mt-4 inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
                      {element.role}
                    </p>
                  </div>
                </div>
              );
            })
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

export default Creator;
