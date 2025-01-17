import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import axios from 'axios'
import getBaseUrl from "../utils/baseURL";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [vis, setVis] = useState(false);
  const passwordRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const response = await axios.post(`${getBaseUrl()}/api/auth/admin`, data, {
        headers : {
          'Content-Type' : 'application/json'
        }
      })
      const auth = response.data
      console.log(auth)
      if(auth.token) {
        localStorage.setItem('token', auth.token);
        setTimeout(() => {
          localStorage.removeItem('token')
          alert('Token has been expired please login again')
          navigate("/admin")
        }, 3600 * 1000)
      }
      alert("login successful")
      navigate("/dashboard")
    } catch (error) {
      console.error(error)
    }
  };

  const togglePasswordVisibility = () => {
    setVis(!vis);
    if (passwordRef.current) {
      passwordRef.current.type = vis ? "password" : "text";
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md hover:shadow-2xl"
      >
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8 tracking-wide">
          Admin Login
        </h1>
        
        {/* Username Field */}
        <div className="relative mb-6">
          <input
            {...register("username", { required: "Username is required" })}
            type="text"
            placeholder="Username"
            className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.username && (
            <span className="text-red-500 text-sm">{errors.username.message}</span>
          )}
        </div>
        
        {/* Password Field */}
        <div className="relative mb-6">
          <input
            {...register("password", { required: "Password is required" })}
            type={vis ? "text" : "password"}
            placeholder="Password"
            className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            
          />
          <span
            onClick={togglePasswordVisibility}
            className="absolute right-6 top-4 cursor-pointer size-5"
          >
            {vis ? <FaRegEyeSlash /> : <IoEyeOutline />}
          </span>
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password.message}</span>
          )}
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;