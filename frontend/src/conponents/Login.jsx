import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [state, setState] = useState("Sign up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {registerUser} = useAuth()
  const {loginUser} = useAuth()
  const {signInWithGoogle} = useAuth()
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    if(state == "Sign up")
    {
      try {
        await registerUser(data.email, data.password);
        if(password.length >= 6) {
          alert("user registered successfully")
        }
      } catch (error) {
        alert("please enter the valid email and password")
        console.error(error)
      }
    }
    else
    {
      try {
        await loginUser(data.email, data.password)
        alert("user logged in successfully")
        navigate("/home")
      } catch (error) {
        alert("please enter the valid email and password")
        console.error(error)
      }
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      alert("Login Successfull")
      navigate("/home")
    } catch (error) {
      alert("please provide a valid email and password")
      console.error(error)
    }
  }

  const handle_Submit = async (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-start m-auto p-8 shado-lg text-zinc-700 shadow-lg">
          <p className="text-2xl font-semibold ">
            {state === "Sign up" ? "Create Account" : "Login"}
          </p>
          <p className="text-sm mb-2">{`Please fill the Required Details for ${
            state === "Sign up" ? "Registering" : "Login"
          }`}</p>
          {state === "Sign up" && (
            <div className="mt-2 w-full">
              <p>Full Name</p>
              <input
                className="border border-zinc-700 w-full rounded-md w-67 px-3 py-1 mt-1"
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
          )}
          <div className="mt-2 w-full">
            <p>Email</p>
            <input
              {...register("email", { required: true })}
              className="border border-zinc-700 w-full rounded-md w-67 px-3 py-1 mt-1"
              name="email"
              type="text"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mt-2 w-full">
            <p>Password</p>
            <input
              {...register("password", { required: true })}
              className="border border-zinc-700 w-full rounded-md w-67 px-3 py-1 mt-1"
              type="text"
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button className="btn-primary mt-6 w-full">{state === "Sign up" ? "Create Account" : "Login"}</button>
          <p className="mt-5">
          {state === "Sign up" ? "Already Registered?" : "Create a new Account?"}
            <span onClick={()=>{state === "Sign up" ? setState("Login") : setState("Sign up")}} className="hover:text-blue-600 hover:underline cursor-pointer">
            {state === "Sign up" ? "       Login" : "    Create Account"}
            </span>
          </p>
          <button onClick={handleGoogleSignIn} className="btn-primary w-full mt-4">Sign in with Google</button>
        </div>
      </div>
    </form>
  );
};

export default Login;
