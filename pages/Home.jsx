import { motion } from "framer-motion";
import { FaUtensils } from "react-icons/fa";

const Home = () => {
  const bestsellers = [
    { name: "Mayo Veg Cheese Grilled", image: " mayoveggie.jpg" },
    { name: "Chicken Tandoori Cheese Grilled", image: "tandoori.jpg" },
    { name: "Chicken  Cheese Grilled", image: "chickencheese.jpg" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-b from-zinc-800 to-black text-white py-16 px-6 md:px-20 min-h-screen w-full content-center">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-8xl mx-auto">

          {/* Text Content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Welcome to <span className="text-yellow-400">Bread & Bite</span>
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Craving something grilled & cheesy? Try our signature <strong>Mayo Chicken Veggie Cheese</strong> and <strong>Tandoori Chicken Grilled Sandwiches</strong>.
            </p>
            <p className="text-yellow-400 text-lg font-medium mb-6">
              🎉 Flat ₹100 OFF on orders above ₹299 – Only on Zomato! 
            </p>
           <motion.a
  href="https://zomato.onelink.me/xqzv/621n3m95"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="flex items-center justify-center gap-3 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300 hover:shadow-yellow-500/40"
>
  <FaUtensils className="text-xl" />
  Order Now on Zomato
</motion.a>
          </div>

          {/* Hero Image */}
          <div className="md:w-1/2">
            <img
              src="Hero.png"
              alt="Delicious Grilled Sandwich"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
     <section className="bg-black text-white py-20 px-6 md:px-20">
  <h2 className="text-4xl text-center font-bold text-yellow-400 mb-6 tracking-wide">
    Our Best Sellers
  </h2>
  <p className="text-center text-zinc-400 mb-12 max-w-xl mx-auto">
    Hand-picked favorites our customers love the most — cheesy, grilled, and unforgettable.
  </p>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {bestsellers.map((item) => (
      <div
        key={item.name}
        className="bg-zinc-800 p-6 rounded-2xl text-center shadow-xl hover:shadow-yellow-400/30 transition duration-200 transform hover:-translate-3 hover:scale-105"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-32 h-32 mx-auto object-cover rounded-full mb-4 border-4 border-yellow-400 shadow-inner"
        />
        <h4 className="text-xl font-semibold text-yellow-300 mb-2">{item.name}</h4>
        <p className="text-zinc-400 text-sm italic">
          Grilled to perfection with fresh flavors.
        </p>
      </div>
    ))}
  </div>
</section>


      {/* Offer Highlight Section */}
      <section className="bg-yellow-400 text-black py-10 px-6 text-center">
        <p className="text-2xl font-bold">🔥 Flat ₹100 OFF on orders above ₹299</p>
        <p className="text-sm">Valid only on Zomato | Limited Time Offer</p>
      </section>
    </>
  );
};

export default Home;
