import React from "react";

export const metadata = {
  title: "About"
}

export default function About() {
  return (
    <div>

      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#000000] to-[#1a1a1a] text-white py-10 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold font-serif text-[#D4AF37]">HAYAT TAX CONSULTANT</h1>
        <p className="mt-4 text-lg sm:text-xl">Your Trusted Partner in Tax Solutions</p>
      </header>

      {/* Services Section */}
      <section className="py-12 sm:py-16 bg-gray-50 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">Our Services</h2>
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Tax Preparation", description: "Comprehensive tax preparation services for individuals and businesses to maximize deductions and ensure compliance." },
            { title: "Tax Planning", description: "Strategic tax planning to help you reduce tax liabilities and plan for the future effectively." },
            { title: "Audit Assistance", description: "Professional guidance and support during audits to help you manage the process and outcomes efficiently." },
            { title: "Business Consulting", description: "Expert consulting services to help you make informed decisions that benefit your business and tax strategy." },
            { title: "Financial Analysis", description: "In-depth financial analysis to help you understand your finances and make better business decisions." },
            { title: "Investment Advisory", description: "Get expert advice on investments to optimize your returns and build long-term wealth." }
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#D4AF37]">{service.title}</h3>
              <p className="mt-4 text-sm sm:text-base text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#000000] to-[#1a1a1a] text-white text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#D4AF37] mb-6">Get In Touch</h2>
        <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto">
          Need assistance? Contact us today to learn how we can help with your tax and business needs.
        </p>
        <a href="/contact" className="bg-[#D4AF37] text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-[#b87300] transition duration-200 text-lg font-medium">
          Contact Us
        </a>
      </section>
    </div>
  );
}
