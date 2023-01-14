import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function LandingPage() {
  return (
    <div className=" min-h-screen">
      <Sidebar />
      <Navbar></Navbar>
      <main className="bg-[#64748b]lg:pl-[340px] p-8 pt-36">
        MENU PARA TRABAJAR
      </main>
    </div>
  );
}
