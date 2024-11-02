import React from "react";

export const metadata = {
  title: "Home"
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#000000] to-[#1a1a1a] text-white py-16 sm:py-20 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold font-serif text-[#D4AF37]">Welcome to HAYAT TAX CONSULTANT</h1>
        <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          We provide expert tax and financial solutions to help you achieve your financial goals with peace of mind.
        </p>
        <a href="/contact" className="mt-8 inline-block bg-[#D4AF37] text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-[#b87300] transition duration-200 text-lg font-medium">
          Get Started
        </a>
      </section>

      {/* Highlights Section */}
      <section className="py-12 sm:py-16 bg-white px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">Why Choose Us?</h2>
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {["Experienced Professionals", "Personalized Services", "Trust & Transparency"].map((title, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#D4AF37]">{title}</h3>
              <p className="mt-4 text-sm sm:text-base text-gray-600">
                {title === "Experienced Professionals" && "Our team has years of experience in tax consulting and financial planning."}
                {title === "Personalized Services" && "We tailor our services to meet your unique financial needs and goals."}
                {title === "Trust & Transparency" && "We prioritize trust and transparency in all our dealings with clients."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-12 sm:py-16 bg-gray-50 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">Our Core Services</h2>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {["Tax Preparation", "Tax Planning", "Audit Assistance", "Business Consulting", "Financial Analysis", "Investment Advisory"].map((service, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#D4AF37]">{service}</h3>
              <p className="mt-4 text-sm sm:text-base text-gray-600">
                {`Professional ${service.toLowerCase()} services to help you stay on top of your financial matters.`}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-12">
          <a href="/services" className="bg-[#D4AF37] text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-[#b87300] transition duration-200 text-lg font-medium">
            View All Services
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#1a1a1a] to-[#000000] text-white px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#D4AF37] mb-8 sm:mb-12">What Our Clients Say</h2>
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
          {[
            { text: "HAYAT TAX CONSULTANT helped me navigate my business taxes with ease. Highly recommended!", name: "Sarah A." },
            { text: "Their team is knowledgeable and friendly. I felt like I was in great hands from day one.", name: "Michael B." }
          ].map((testimonial, index) => (
            <div key={index} className="bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg text-center">
              <p className="italic text-sm sm:text-base">"{testimonial.text}"</p>
              <span className="block mt-4 font-semibold">- {testimonial.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-12 sm:py-16 bg-[#D4AF37] text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-8">Ready to Transform Your Finances?</h2>
        <p className="text-base sm:text-lg text-gray-800 mb-6 sm:mb-8 max-w-lg mx-auto">
          Contact us today to schedule a consultation and see how we can help you achieve your financial goals.
        </p>
        <a href="/contact" className="bg-black text-[#D4AF37] px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-gray-800 transition duration-200 text-lg font-medium">
          Contact Us
        </a>
      </section>
    </div>
  );
}
