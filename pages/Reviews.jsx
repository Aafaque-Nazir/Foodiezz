import TestSlider from '../src/components/TestSlider';

const testimonials = [
  {
    name: "Aarav M.",
    text: "Absolutely delicious! The mayo chicken sandwich was super fresh and cheesy. Best in Navi Mumbai!",
  },
  {
    name: "Priya S.",
    text: "I love how hygienic and tasty everything is. The tandoori cheese grilled was fire! Definitely ordering again.",
  },
  {
    name: "Karan D.",
    text: "Perfect for late night cravings. Bread & Bite never disappoints with quality and taste.",
  }
];

const Reviews = () => {
  return (
    <section className="bg-gradient-to-b from-zinc-900 to-black text-zinc-800 py-16 lg:py-36 px-6 md:px-20 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
          key={index}
            className="bg-amber-100 rounded-xl p-6 shadow-lg flex flex-col items-center text-center"
          >
            <p className="text-md italic text-zinc-700 mb-4">"{t.text}"</p>
            <h4 className="text-lg font-semibold text-yellow-700">{t.name}</h4>
          </div>
        ))}
      </div>
      <TestSlider/>
    </section>
  );
};

export default Reviews;
