import React from "react";

export const metadata = {
  title: "Login"
};

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-[#D4AF37] mb-6">Login to Your Account</h2>
        
        <form>
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37]"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37]"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-[#D4AF37] hover:bg-[#b87300] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
            >
              Login
            </button>
          </div>
        </form>

        {/* Registration Link */}
        <div className="text-center mt-4">
          <p className="text-gray-600 text-sm">
            Don't have an account?{" "}
            <a href="/register" className="text-[#D4AF37] hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
