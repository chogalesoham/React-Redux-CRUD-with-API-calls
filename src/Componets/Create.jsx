import React, { useState } from "react";

const Create = () => {
  const [user, setUser] = useState({});

  const UserData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data Submitted:", user);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md transform transition-all duration-500 hover:scale-105 mt-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create User...
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              name="name"
              onChange={UserData}
              placeholder="Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 transform focus:scale-105"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              onChange={UserData}
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300 transform focus:scale-105"
            />
          </div>
          <div className="relative">
            <input
              type="password"
              name="password"
              onChange={UserData}
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 transform focus:scale-105"
            />
          </div>
          <div className="relative">
            <select
              name="gender"
              onChange={UserData}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform focus:scale-105"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="relative">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl hover:bg-gradient-to-l hover:from-pink-500 hover:to-purple-500 transition duration-300 transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
