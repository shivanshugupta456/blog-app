import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,#020617_0%,#0f172a_45%,#082f49_100%)] px-6 py-10 text-white shadow-[0_30px_120px_rgba(15,23,42,0.24)] sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr_1fr]">
          <div>
            <div className="font-semibold text-3xl">
              Cilli<span className="text-sky-300">Blog</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              A cleaner editorial space for creators, readers, and modern
              publishing workflows.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">
              Explore
            </h3>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <Link to="/blogs" className="block transition hover:text-white">
                All Blogs
              </Link>
              <Link to="/creators" className="block transition hover:text-white">
                Creators
              </Link>
              <Link to="/about" className="block transition hover:text-white">
                About
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">
              Connect
            </h3>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <Link to="/contact" className="block transition hover:text-white">
                Contact
              </Link>
              <a href="mailto:rajkishoregupta716@gmail.com" className="block transition hover:text-white">
                Email
              </a>
              <a href="tel:+919368220357" className="block transition hover:text-white">
                Call
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">
              Follow
            </h3>
            <div className="mt-5 flex gap-4">
              <a href="#" className="rounded-2xl border border-white/10 bg-white/10 p-3 text-white transition hover:bg-white/20">
                <FaGithub className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-2xl border border-white/10 bg-white/10 p-3 text-white transition hover:bg-white/20">
                <BsYoutube className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-2xl border border-white/10 bg-white/10 p-3 text-white transition hover:bg-white/20">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex sm:items-center sm:justify-between">
          <p>&copy; 2026 CilliBlog. All rights reserved.</p>
          <p className="mt-3 sm:mt-0">Designed for a calmer, more premium reading experience.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
