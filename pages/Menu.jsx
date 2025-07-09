import React, { useState } from "react";
import menuItems from "../data/MenuItems";

const Menu = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? menuItems : menuItems.slice(0, 6);

  return (
    <section id="menu" className=" bg-gradient-to-b from-zinc-900 to-black text-white py-16 px-6 min-h-screen lg:py-30 md:px-20">
      <h2 className="text-4xl font-bold mb-10 text-center text-yellow-400">
        Our Menu
        <span className="text-white"> - Delicious Dishes</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-800 rounded-xl shadow-lg p-5 flex flex-col items-center text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-400 mb-4">{item.category}</p>
            <p className="text-yellow-400 font-bold text-lg mb-4">
              ₹{item.price}
            </p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-4 py-2 rounded-full font-medium hover:bg-yellow-300"
            >
              Order Now
            </a>
          </div>
        ))}
      </div>

      { menuItems.length > 6 && (
        <div className="text-center mt-8">
          <button
          onClick={()=> setShowAll(!showAll)}
            className="text-yellow-400 underline hover:text-yellow-300 font-medium text-xl"
          >
            {showAll ? "show less": "show all"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Menu;
