import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] shadow-lg">
      <h1 className="text-2xl font-bold text-white">Lumepath</h1>
      <ul className="flex space-x-6 text-white">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">About</a></li>
        <li><a href="#" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}

