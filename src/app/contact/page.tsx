import React from "react";

export const metadata = {
    title: "Contact"
}

export default function Contact() {
    return (
        <div>

            {/* Header Section */}
            <header className="bg-gradient-to-r from-[#000000] to-[#1a1a1a] text-white py-10 sm:py-16 text-center px-4">
                <h1 className="text-4xl sm:text-5xl font-bold font-serif text-[#D4AF37]">Contact Us</h1>
                <p className="mt-4 text-base sm:text-lg">We’re here to help! Reach out with any questions or inquiries.</p>
            </header>

            {/* Contact Information Section */}
            <section className="py-12 sm:py-16 bg-gray-50 text-center px-4">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get In Touch</h2>
                <p className="text-gray-700 mb-8">Feel free to contact us directly using the information below.</p>
                <div className="max-w-xl mx-auto space-y-4 text-base sm:text-lg">
                    <p><strong>Email:</strong> <a href="mailto:chartard12@gmail.com" className="text-[#D4AF37] hover:underline">chartard12@gmail.com</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+03183608176" className="text-[#D4AF37] hover:underline">03183608176</a></p>
                    <p><strong>Location:</strong> Behind Fortune Center, F-45, Block 6 PECHS, Main Shahrah-E-Faisal Karachi.</p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-12 sm:py-16 bg-white px-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">Send Us a Message</h2>
                <div className="max-w-lg mx-auto">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-lg font-medium text-gray-700">Your Name</label>
                            <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37]" placeholder="Enter your name" />
                        </div>
                        <div>
                            <label className="block text-lg font-medium text-gray-700">Your Email</label>
                            <input type="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37]" placeholder="Enter your email" />
                        </div>
                        <div>
                            <label className="block text-lg font-medium text-gray-700">Message</label>
                            <textarea className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37]" rows={5} placeholder="Write your message"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-[#D4AF37] text-black px-4 py-2 rounded-full hover:bg-[#b87300] transition duration-200 font-medium">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Response Time Section */}
            <section className="py-12 sm:py-16 bg-gradient-to-r from-[#1a1a1a] to-[#000000] text-white text-center px-4">
                <h2 className="text-3xl sm:text-4xl font-semibold text-[#D4AF37] mb-4">Quick Response Time</h2>
                <p className="text-base sm:text-lg max-w-xl mx-auto">
                    We aim to respond to all inquiries within 24 hours. For immediate assistance, please call us at <span className="font-semibold text-[#D4AF37]">03183608176</span>.
                </p>
            </section>
        </div>
    );
}
