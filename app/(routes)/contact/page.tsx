import { Mail, Phone } from "lucide-react";
import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 font-sans rounded-lg">
      <div className="grid md:grid-cols-[1fr_1px_1fr] gap-16 items-center relative overflow-hidden p-8 shadow-md before:absolute before:right-0 bg-white max-md:before:hidden rounded-lg">
        {/* Contact Form Section */}
        <div>
          <h2 className="text-neutral-700 text-3xl font-bold uppercase">
            Get In Touch
          </h2>
          <p className="text-sm text-gray-500 mt-4 leading-relaxed">
            Have a query or want to place a bulk order? Our team at MunchKart is
            here to assist you.
          </p>

          <form className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#84B74E] outline-none"
            />
            <input
              type="text"
              placeholder="Street"
              className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#84B74E] outline-none"
            />
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="City"
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#84B74E] outline-none"
              />
              <input
                type="text"
                placeholder="Postcode"
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#84B74E] outline-none"
              />
            </div>
            <input
              type="number"
              placeholder="Phone No."
              className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#84B74E] outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#84B74E] outline-none"
            />
            <textarea
              placeholder="Write Message"
              className="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#84B74E] outline-none"
            ></textarea>
            <button
              type="submit"
              className="mt-8 flex items-center justify-center text-sm w-full px-4 py-2.5 bg-[#84B74E] hover:bg-green-700 text-white"
            >
              Send Message
            </button>
          </form>
          {/* Contact Details */}
          <ul className="mt-4 flex flex-wrap justify-center gap-6">
            <li className="flex items-center">
              <Mail className="text-hero" />{" "}
              <span className="ml-3 font-semibold">support@munchkart.com</span>
            </li>
            <li className="flex items-center">
              <Phone className="text-hero" />{" "}
              <span className="ml-3 font-semibold">+91 0123456789</span>
            </li>
          </ul>
        </div>
        {/* Vertical Separator */}
        <div className="h-full w-px bg-gray-300"></div>
        {/* Map Section */}
        <div className="z-10 relative h-full max-md:min-h-[350px]">
          <iframe
            src="https://maps.google.com/maps?q=Kansara%20Bazar,%20Manek%20Chowk%20Rd,%20Old%20City,%20Danapidth,%20Khadia,%20Ahmedabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="left-0 top-0 h-full w-full"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
