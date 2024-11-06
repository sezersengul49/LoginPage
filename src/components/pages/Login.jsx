

import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <div className=" bg-white h-screen overflow-hidden">
      <div className="flex flex-col md:flex-row justify-center items-center h-screen space-y-4 md:space-y-0 md:space-x-4 bg-blue-100">
        {/* Form Kısmı */}
        <div className="max-w-md w-full mt-8"> 
          <form className="flex flex-col bg-white m-4 p-11 rounded-xl shadow-md">
            <div className="flex flex-col space-y-4">
              <button className="bg-blue-100 border-gray-400 flex items-center space-x-2 border p-2 rounded-lg hover:bg-gray-500 transition duration-200">
                <FcGoogle className="h-6 w-6" />
                <span>Sign Up With Google</span>
              </button>
              <button className="bg-blue-100 flex items-center space-x-2 border border-gray-400 p-2 hover:bg-gray-500 transition rounded-lg duration-200">
                <FaGithub className="text-gray-800 h-6 w-6" />
                <span>Sign Up With GitHub</span>
              </button>
            </div>
            <br />
            <div className="flex items-center w-full my-4">
              <div className="flex-grow border-t w-1/2 border-gray-500"></div>
              <span className="px-4 text-gray-600">Or sign up with e-mail</span>
              <div className="flex-grow border-t w-1/2 border-gray-500"></div>
            </div>
            <br />
            <div className="flex items-center border bg-white border-gray-600 rounded-lg mb-4 p-2">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="text"
                className="outline-none flex-1"
                placeholder="Username"
                required
              />
            </div>
            <div className="flex items-center border bg-white border-gray-600 rounded-lg mb-4 p-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                className="outline-none flex-1"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-900 transition duration-200">
              Sign Up
            </button>
          </form>
        </div>
         
        <div className="max-w-xs w-full">
          <img src="/public/login.png" alt="photo" className="w-full h-60" />
        </div>
      </div>
    </div>
  );
};

export default Login;











