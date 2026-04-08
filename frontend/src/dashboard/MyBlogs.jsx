import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../utils";

function MyBlogs() {
  const [myBlogs, setMyBlogs] = useState([]);
  useEffect(() => {
    const fetchMyBlogs = async () => {
      try {
        const { data } = await axios.get(
          `${BACKEND_URL}/api/blogs/my-blog`,
          { withCredentials: true }
        );
        console.log(data);
        setMyBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMyBlogs();
  }, []);

  const handleDelete = async (id) => {
    await axios
      .delete(`${BACKEND_URL}/api/blogs/delete/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message || "Blog deleted successfully");
        setMyBlogs((value) => value.filter((blog) => blog._id !== id));
      })
      .catch((error) => {
        toast.error(error.response.message || "Failed to delete blog");
      });
  };
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">
            Content Library
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">
            Your published stories
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Review, update, and retire posts from a cleaner editorial overview.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-600">
          Total blogs: <span className="font-semibold text-slate-900">{myBlogs?.length || 0}</span>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {myBlogs && myBlogs.length > 0 ? (
          myBlogs.map((element) => (
            <div
              className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(148,163,184,0.16)]"
              key={element._id}
            >
              {element?.blogImage && (
                <img
                  src={element?.blogImage.url}
                  alt="blogImg"
                  className="h-56 w-full object-cover"
                />
              )}
              <div className="p-6">
                <div className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
                  {element.category}
                </div>
                <h4 className="mt-4 text-2xl font-semibold text-slate-900">
                  {element.title}
                </h4>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                  {element.about}
                </p>
                <div className="mt-6 flex gap-3">
                  <Link
                    to={`/blog/update/${element._id}`}
                    className="rounded-2xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-sky-600"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(element._id)}
                    className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-600 transition duration-300 hover:bg-rose-100"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
            <p className="text-lg font-semibold text-slate-700">
              You have not posted any blog yet.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Start with a polished article and it will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyBlogs;
