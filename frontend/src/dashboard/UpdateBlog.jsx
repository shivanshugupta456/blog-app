import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { BACKEND_URL } from "../utils";

function UpdateBlog() {
  const navigateTo = useNavigate();
  const { id } = useParams();

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

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get(
          `${BACKEND_URL}/api/blogs/single-blog/${id}`,

          {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(data);
        setTitle(data?.title);
        setCategory(data?.category);
        setAbout(data?.about);
        setBlogImage(data?.blogImage.url);
      } catch (error) {
        console.log(error);
        toast.error("Please fill the required fields");
      }
    };
    fetchBlog();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("about", about);

    formData.append("blogImage", blogImage);
    try {
      const { data } = await axios.put(
        `${BACKEND_URL}/api/blogs/update/${id}`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(data);
      toast.success(data.message || "Blog updated successfully");
      navigateTo("/");
    } catch (error) {
      console.log(error);
      toast.error(
        error.response.data.message || "Please fill the required fields"
      );
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
          Refine Story
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-900">
          Update your blog with precision
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Fine-tune content, replace visuals, and polish your post before the
          next reader lands on it.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <form
          className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(148,163,184,0.18)] sm:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Category
              </label>
              <select
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition duration-300 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
                placeholder="BLOG MAIN TITLE"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition duration-300 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              About
            </label>
            <textarea
              rows="8"
              className="w-full rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-4 text-slate-700 outline-none transition duration-300 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
              placeholder="Something about your blog atleast 200 characters!"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>

          <button
            className="mt-6 w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-amber-500 hover:text-slate-950"
            onClick={handleUpdate}
          >
            Update
          </button>
        </form>

        <div className="space-y-6">
          <div className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(135deg,#111827_0%,#7c2d12_100%)] p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.24)]">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-200">
              Current Cover
            </p>
            <img
              src={
                blogImagePreview
                  ? blogImagePreview
                  : blogImage
                  ? blogImage
                  : "/imgPL.webp"
              }
              alt="Blog Main"
              className="mt-4 h-64 w-full rounded-[1.25rem] object-cover"
            />
            <input
              type="file"
              className="mt-4 w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none file:mr-4 file:rounded-full file:border-0 file:bg-white file:px-4 file:py-2 file:font-semibold file:text-slate-900"
              onChange={changePhotoHandler}
            />
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(148,163,184,0.18)]">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-600">
              Edit Carefully
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Refreshing the title, image, or description can instantly improve
              how polished and clickable your article feels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateBlog;
