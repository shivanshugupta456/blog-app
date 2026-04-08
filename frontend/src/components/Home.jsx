import React from "react";
import Hero from "../Home/Hero";
import Trending from "../Home/Trending";
import Devotional from "../Home/Devotional";
import Creator from "../Home/Creator";

function Home() {
  return (
    <div className="bg-[linear-gradient(180deg,#f8fbff_0%,#f8fafc_40%,#fffdf5_100%)]">
      <Hero />
      <Trending />
      <Devotional />
      <Creator />
    </div>
  );
}

export default Home;
