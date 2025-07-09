// Updated AboutSection.jsx with all suggested improvements
import React from "react";
import { FaCheckCircle, FaTruck, FaHandsWash, FaRupeeSign, FaUserTie } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const AboutSection = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-zinc-900 to-black text-white py-16 lg:py-32 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="About.png"
            alt="Bread & Bite Kitchen"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-yellow-500 mb-4">About Bread & Bite</h2>
          <p className="text-lg text-zinc-300 mb-4">
            At Bread & Bite, we bring you the perfect bite every time. Crafted with love in the heart of Navi Mumbai,
            our sandwiches are made from freshly baked bread, quality ingredients, and unique house-made sauces.
          </p>
          <p className="text-md text-zinc-400 mb-4">
            From creamy mayo veggie grills to smoky tandoori chicken cheese stacks, our menu is designed to satisfy
            every craving. Hygiene and taste go hand-in-hand in our kitchen.
          </p>
          <p className="text-md text-zinc-400">
            Whether you’re hungry for a quick lunch or a cheesy indulgence, Bread & Bite is here to serve delicious
            memories, one sandwich at a time.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-bold text-yellow-400 mb-6">Why Choose Us</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: <FaCheckCircle />, text: "Freshly Baked Bread" },
            { icon: <FaHandsWash />, text: "Top Hygiene Standards" },
            { icon: <FaTruck />, text: "Quick & Hot Delivery" },
            { icon: <FaRupeeSign />, text: "Affordable Prices" }
          ].map((item, i) => (
            <div key={i} className="bg-zinc-800 rounded-lg p-6 flex flex-col items-center">
              <div className="text-yellow-400 text-3xl mb-2">{item.icon}</div>
              <p className="text-zinc-300 font-semibold">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Meet the Chef */}
      <div className="mt-20 text-center">
        <h3 className="text-3xl font-bold text-yellow-400 mb-4">Meet Our Head Chef</h3>
        <p className="text-lg italic text-zinc-400 max-w-2xl mx-auto">
          “We don’t just make sandwiches — we build cravings.” — <span className="text-yellow-400 font-bold">Chef</span>
        </p>
      </div>

      {/* Our Story Timeline */}
      <div className="mt-20 text-left max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold text-yellow-400 mb-4 text-center">Our Journey</h3>
        <ul className="space-y-4 text-zinc-400">
          <li>📍 <strong>2025:</strong> Started in Taloja Phase 1</li>
          <li>🥪 <strong>2025:</strong> 100+ sandwiches delivered across Navi Mumbai</li>
          <li>🚀 <strong>Future:</strong> Expanding to Kharghar & Panvel</li>
        </ul>
      </div>

      {/* Customer Snippet */}
      <div className="mt-20 text-center">
        <blockquote className="text-xl italic text-zinc-300 max-w-3xl mx-auto">
          “One of the best grilled sandwiches in Navi Mumbai. Tandoori chicken is fire!”
        </blockquote>
        <p className="text-yellow-400 mt-2 font-medium">— Neha R.</p>
        <Link to="/reviews" className="inline-block mt-4 text-yellow-400 underline hover:text-yellow-300 transition">See All Reviews →</Link>
      </div>
    </section>
  );
};

export default AboutSection;
