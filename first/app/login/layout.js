"use client";
import React from "react";
import Navbar from "../components/navbar/page";
import Footer from "../components/footer/page";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
