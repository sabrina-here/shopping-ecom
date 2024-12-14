import React from "react";
import Hero from "./Hero";
import Collections from "./Collections";
import BestSeller from "./BestSeller";
import Banner from "./Banner";
import NewArrival from "./NewArrival";
import Clients from "./Clients";
import Blogs from "./Blogs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Collections />
      <BestSeller />
      <Banner />
      <NewArrival />
      <Clients />
      <Blogs />
    </div>
  );
}
