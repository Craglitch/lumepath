import React from "react"
import Hero from "../components/Hero"
import Nav from "../components/Navbar"

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20">
      <h2 className="text-4xl font-semibold text-primary mb-4">
        Prototype 1.0 patch
      </h2>
      <div>
        <Hero/ >
      </div>
    </section>
  );
}

