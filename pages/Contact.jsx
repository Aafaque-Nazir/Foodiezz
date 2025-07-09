// ContactSection.jsx
import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gradient-to-b from-zinc-900 to-black text-white py-16 px-6 md:px-20 scroll-mt-20 min-h-screen lg:py-34">
      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-10">
        Contact Us
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-4">
          <p className="text-lg">📞 <span className="font-medium">Call or WhatsApp:</span> <a href="tel:9325629256" className="text-yellow-400 hover:underline">Call Now</a></p>
          <p className="text-lg">📍 <span className="font-medium">Location:</span> Navi Mumbai (Taloja Phase 1)</p>
          <p className="text-lg">🕒 <span className="font-medium">Timings:</span> 10 AM – 12AM (All Days)</p>
          <a
            href="https://wa.me/919325629256"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* Netlify Form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/thank-you"
          className="bg-zinc-800 p-6 rounded-xl shadow-lg space-y-4"
        >
          {/* Hidden input for Netlify tracking */}
          <input type="hidden" name="form-name" value="contact" />
          {/* Honeypot (spam protection) */}
          <input type="text" name="bot-field" className="hidden" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full px-4 py-2 rounded bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="w-full px-4 py-2 rounded bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-full hover:bg-yellow-300 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
