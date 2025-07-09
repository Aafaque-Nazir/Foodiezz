import React from 'react';
import Slider from 'react-slick';

const testimonials = [
  {
    name: "Rohit S.",
    review: "The Mayo Chicken sandwich was fire! Delivered hot & fresh. Highly recommend!",
  },
  {
    name: "Anjali M.",
    review: "Loved the cheese grilled veg! Super tasty and affordable. 10/10",
  },
  {
    name: "Karan T.",
    review: "Fast delivery in Taloja, good portion, and friendly packaging. Ordering again!",
  },
  {
    name: "Neha R.",
    review: "Soft bread, juicy filling. Easily one of the best sandwiches in Navi Mumbai.",
  },
];

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true
  };

  return (
    <section className=" z-50 bg-black w-full text-white py-16 px-6 md:px-20 rounded-xl">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="bg-zinc-800 grid place-content-center px-8 py-6 shadow-md mx-6 text-center">
            <p className="text-lg italic mb-4">"{item.review}"</p>
            <h4 className="text-yellow-400 font-semibold">{item.name}</h4>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialsSlider;
