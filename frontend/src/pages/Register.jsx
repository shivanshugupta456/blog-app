import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { BACKEND_URL } from "../utils";

function Register() {
  const { setIsAuthenticated, setProfile } = useAuth();

  const navigateTo = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [education, setEducation] = useState("");
  const [photo, setPhoto] = useState("");
  const [photoPreview, setPhotoPreview] = useState("");

  const changePhotoHandler = (e) => {
    console.log(e);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPhotoPreview(reader.result);
      setPhoto(file);
    };
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("education", education);
    formData.append("photo", photo);
    try {
      const { data } = await axios.post(
        `${BACKEND_URL}/api/users/register`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(data);
      localStorage.setItem("jwt", data.token); // storing token in localStorage so that if user refreshed the page it will not redirect again in login
      toast.success(data.message || "User registered successfully");
      setProfile(data);
      setIsAuthenticated(true);
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setRole("");
      setEducation("");
      setPhoto("");
      setPhotoPreview("");
      navigateTo("/");
    } catch (error) {
      console.log(error);
      toast.error(
        error.response.data.message || "Please fill the required fields"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(160deg,#e0f2fe_0%,#f8fafc_35%,#fef3c7_100%)] px-4 py-10">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-[0_30px_120px_rgba(15,23,42,0.16)] backdrop-blur-xl lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative hidden overflow-hidden bg-[linear-gradient(180deg,#0f172a_0%,#172554_100%)] p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.3),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.24),transparent_26%)]" />
          <div className="relative">
            <p className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-slate-200">
              Creator Onboarding
            </p>
            <div className="font-semibold text-3xl">
              Cilli<span className="text-amber-300">Blog</span>
            </div>
            <h1 className="mt-8 max-w-md text-4xl font-semibold leading-tight">
              Build a profile that looks as strong as your writing.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300">
              Join the platform with a refined creator profile, role-based access,
              and a clean setup flow designed for serious publishing.
            </p>
          </div>
          <div className="relative space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5">
              <p className="text-sm text-slate-300">Premium onboarding</p>
              <p className="mt-2 text-lg font-medium">
                Set your identity once and step straight into writing, editing,
                and managing your content.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-2xl font-semibold text-white">Fast</p>
                <p className="mt-1 text-slate-300">Account setup</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-2xl font-semibold text-white">Clean</p>
                <p className="mt-1 text-slate-300">Profile experience</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12">
          <form
            onSubmit={handleRegister}
            className="w-full max-w-2xl rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_20px_80px_rgba(148,163,184,0.22)]"
          >
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-500">
              Join Now
            </p>
            <div className="mt-3 font-semibold text-3xl text-slate-900">
              Create your creator profile
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Start with a polished account setup built for writers, admins, and
              growing editorial teams.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition duration-300 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
                >
                  <option value="">Select Role</option>
                  <option value="user">user</option>
                  <option value="admin">admin</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition duration-300 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition duration-300 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Phone number
                </label>
                <input
                  type="number"
                  placeholder="Your Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition duration-300 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition duration-300 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Education
                </label>
                <select
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition duration-300 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
                >
                  <option value="">Select Your Education</option>
                  <option value="BCA ">BCA</option>
                  <option value="MCA ">MCA</option>
                  <option value="MBA ">MBA</option>
                  <option value="BBA ">BBA</option>
                </select>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-5">
              <label className="mb-4 block text-sm font-medium text-slate-700">
                Profile photo
              </label>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#0f172a,#0369a1)] text-sm font-medium text-white shadow-lg">
                  {photoPreview ? (
                    <img
                      src={photoPreview}
                      alt="photo preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    "Preview"
                  )}
                </div>
                <input
                  type="file"
                  onChange={changePhotoHandler}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-600 outline-none transition duration-300 file:mr-4 file:rounded-full file:border-0 file:bg-amber-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-amber-700 hover:file:bg-amber-200"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-amber-500 hover:text-slate-950"
            >
              Register
            </button>

            <p className="mt-6 text-center text-sm text-slate-500">
              Already registered?{" "}
              <Link
                to={"/login"}
                className="font-semibold text-amber-600 transition hover:text-slate-900"
              >
                Login now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
