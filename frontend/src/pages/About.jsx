import React from "react";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { profile } = useAuth();
  const user = profile?.user || profile;

  return (
    <div className="bg-[radial-gradient(circle_at_top,#e0f2fe_0%,#f8fafc_40%,#fef3c7_100%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/75 shadow-[0_30px_120px_rgba(15,23,42,0.14)] backdrop-blur-xl">
          <div className="grid gap-8 p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-600">
                About The Builder
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                Crafted by {user?.name || "a passionate creator"} with full-stack
                focus and a premium product mindset.
              </h1>
              <p className="mt-6 text-base leading-8 text-slate-600">
                This platform reflects a blend of front-end polish and back-end
                engineering. The goal is simple: create blog experiences that
                feel modern, reliable, and enjoyable to use across every screen.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#0f172a_0%,#0369a1_70%,#f59e0b_100%)] p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.24)]">
              <p className="text-xs uppercase tracking-[0.3em] text-sky-100">
                Snapshot
              </p>
              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-sm text-slate-200">Primary focus</p>
                  <p className="mt-2 text-lg font-semibold">
                    React, Node.js, MongoDB, and product-led UI design
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-sm text-slate-200">Build style</p>
                  <p className="mt-2 text-lg font-semibold">
                    Clean interfaces, smooth workflows, and practical engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(148,163,184,0.16)] lg:col-span-2">
            <h2 className="text-2xl font-semibold text-slate-900">
              Technical Expertise
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Strong experience across responsive front-end interfaces, scalable
              server-side architecture, and deployment-ready application flows.
              The work combines React-based interfaces, Express APIs, MongoDB
              data layers, and a practical understanding of modern CI/CD and
              cloud-friendly deployment patterns.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              The emphasis is not only on writing code that works, but on shaping
              experiences that feel refined, accessible, and maintainable as the
              product grows.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_18px_50px_rgba(15,23,42,0.22)]">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-200">
              Professional Highlights
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
              <li>Built and deployed complete full-stack applications.</li>
              <li>Balanced product design quality with engineering speed.</li>
              <li>Continuously adapts to newer tools and web patterns.</li>
            </ul>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(148,163,184,0.16)]">
            <h2 className="text-2xl font-semibold text-slate-900">
              Philosophy
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Technology becomes more meaningful when it solves real problems and
              still feels human. That is why the approach here is centered around
              thoughtful interfaces, dependable systems, and a constant push
              toward better user experience.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(135deg,#fff7ed_0%,#ffffff_100%)] p-6 shadow-[0_18px_50px_rgba(148,163,184,0.16)]">
            <h2 className="text-2xl font-semibold text-slate-900">
              Personal Inspiration
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Curiosity, discipline, and a deep love for learning keep the work
              moving forward. Inspiration comes from meaningful competition,
              strong personal bonds, and the drive to keep improving with every
              product iteration.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
