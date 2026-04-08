import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BACKEND_URL } from "../utils";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [about, setAbout] = useState("");

  const [blogImage, setBlogImage] = useState("");
  const [blogImagePreview, setBlogImagePreview] = useState("");

  const changePhotoHandler = (e) => {
    console.log(e);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setBlogImagePreview(reader.result);
      setBlogImage(file);
    };
  };

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("about", about);

    formData.append("blogImage", blogImage);
    try {
      const { data } = await axios.post(
        `${BACKEND_URL}/api/blogs/create`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(data);
      toast.success(data.message || "User registered successfully");
      setTitle("");
      setCategory("");
      setAbout("");
      setBlogImage("");
      setBlogImagePreview("");
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Please fill the required fields");
    }
  };
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">
          New Story
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-900">
          Create a premium-looking post
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Build your next article with a richer cover image, stronger title, and
          a clear editorial structure.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <form
          onSubmit={handleCreateBlog}
          className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(148,163,184,0.18)] sm:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition duration-300 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
              >
                <option value="">Select Category</option>
                <option value="Devotion">Devotion</option>
                <option value="Sports">Sports</option>
                <option value="Coding">Coding</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Business">Business</option>
                <option value="Politics">Politics</option>
                <option value="Science">Science</option>
                <option value="Health">Health</option>
                <option value="Travel">Travel</option>
                <option value="Food">Food</option>
                <option value="Fashion">Fashion</option>
                <option value="Music">Music</option>
                <option value="Movies">Movies</option>
                <option value="Books">Books</option>
                <option value="Games">Games</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Title
              </label>
              <input
                type="text"
                placeholder="Enter your blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition duration-300 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              About
            </label>
            <textarea
              rows="8"
              placeholder="Write something about your blog"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="w-full rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-4 text-slate-700 outline-none transition duration-300 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-sky-600"
          >
            Post Blog
          </button>
        </form>

        <div className="space-y-6">
          <div className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(135deg,#0f172a_0%,#0369a1_70%,#38bdf8_100%)] p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.24)]">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-100">
              Cover Preview
            </p>
            <div className="mt-4 overflow-hidden rounded-[1.5rem] bg-white/10 p-3 backdrop-blur-sm">
              <img
                src={blogImagePreview ? `${blogImagePreview}` : "/imgPL.webp"}
                alt="Image"
                className="h-64 w-full rounded-[1.1rem] object-cover"
              />
            </div>
            <input
              type="file"
              onChange={changePhotoHandler}
              className="mt-4 w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none file:mr-4 file:rounded-full file:border-0 file:bg-white file:px-4 file:py-2 file:font-semibold file:text-slate-900"
            />
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(148,163,184,0.18)]">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-500">
              Publishing Note
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Strong titles, clear categories, and a good cover image make your
              content feel more trustworthy and easier to discover.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
