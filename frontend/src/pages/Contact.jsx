import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      access_key: "c44f1002-a107-4c47-9f32-ff369e81f0f7",
      name: data.username,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://api.web3forms.com/submit", userInfo);
      toast.success("Message sent successfully");
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  return (
    <div className="bg-[radial-gradient(circle_at_top,#dbeafe_0%,#f8fafc_40%,#fde68a_100%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-[0_30px_120px_rgba(15,23,42,0.14)] backdrop-blur-xl">
        <div className="grid gap-8 p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#0f172a_0%,#0369a1_60%,#f59e0b_100%)] p-8 text-white shadow-[0_20px_60px_rgba(15,23,42,0.22)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-100">
              Contact
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              Let&apos;s talk about ideas, products, and better web experiences.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-200">
              Reach out for feedback, collaboration, or project conversation.
              The response space is designed to feel as refined as the rest of
              the product.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <FaPhone className="text-amber-300" />
                <span>+91 9368220357</span>
              </li>
              <li className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <FaEnvelope className="text-pink-300" />
                <span>rajkishoregupta716@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <FaMapMarkerAlt className="text-emerald-300" />
                <span>Firozabad, Uttar Pradesh, India</span>
              </li>
            </ul>
          </div>
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(148,163,184,0.16)]">
            <h3 className="text-2xl font-semibold text-slate-900">
              Send a message
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Share your thoughts and we will keep the conversation moving.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition duration-300 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                  {...register("username", { required: true })}
                />
                {errors.username && (
                  <span className="mt-2 block text-sm font-semibold text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition duration-300 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="mt-2 block text-sm font-semibold text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition duration-300 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <span className="mt-2 block text-sm font-semibold text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-sky-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
