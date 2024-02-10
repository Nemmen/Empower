import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ssign from '../../components/svgs/ssign.svg'

import { useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFailed } from "../../redux/userSlice";

import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signin", { username, password });
      dispatch(loginSuccess(res.data));
      toast.success("Successfully logged in!", {
        position: "top-right",
      });
      navigate("/comlanding");
    } catch (err) {
      toast.error("Wrong Username/Password !", { position: "top-right" });
      dispatch(loginFailed());
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      const res = await axios.post("/auth/signup", {
        username,
        email,
        password,
      });
      dispatch(loginSuccess(res.data));
      navigate("/comlanding");
      toast.success("Successfully Signed Up", {
        position: "top-right",
      });
    } catch (err) {
      toast.error("Wrong Username/Password !", { position: "top-right" });
      dispatch(loginFailed());
    }
  };

  

  return (
   <>
     {/* // <form classNameName="bg-gray-200 flex flex-col py-12 px-8 rounded-lg w-8/12 md:w-6/12 mx-auto gap-10">
    //   <h2 classNameName="text-3xl font-bold text-center">Sign in to Twitter</h2>

    //   <input */}
    {/* //     onChange={(e) => setUsername(e.target.value)}
    //     type="text"
    //     placeholder="username"
    //     classNameName="text-xl py-2 rounded-full px-4"
    //   />
    //   <input
    //     onChange={(e) => setPassword(e.target.value)}
    //     type="password"
    //     placeholder="password"
    //     classNameName="text-xl py-2 rounded-full px-4"
    //   />

    //   <button
    //     classNameName="text-xl py-2 rounded-full px-4 bg-blue-500 text-white"
    //     onClick={handleLogin}
    //   >
    //     Sign in
    //   </button>

    //   <p classNameName="text-center text-xl">Don't have an account?</p>

    //   <input
    //     onChange={(e) => setUsername(e.target.value)}
    //     type="text"
    //     placeholder="username"
    //     classNameName="text-xl py-2 rounded-full px-4"
    //   />
    //   <input
    //     onChange={(e) => setEmail(e.target.value)}
    //     type="email"
    //     placeholder="email"
    //     required
    //     classNameName="text-xl py-2 rounded-full px-4"
    //   />
    //   <input
    //     onChange={(e) => setPassword(e.target.value)}
    //     type="password"
    //     placeholder="password"
    //     classNameName="text-xl py-2 rounded-full px-4"
    //   />

    //   <button
    //     onClick={handleSignup}
    //     classNameName="text-xl py-2 rounded-full px-4 bg-blue-500 text-white"
    //     type="submit"
    //   >
    //     Sign up
    //   </button>
    // </form> */}

    <form >
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign in</h1>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="username"
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  />
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="password"
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  />

                  <button
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    onClick={handleLogin}
                  >
                    Sign in
                  </button>
                
              </div>

              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or sign in with e-mail
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="username"
                    className="w-full px-8 mb-5 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  />
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="email"
                    required
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  />
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="password"
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  />

                  <button
                    onClick={handleSignup}
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    type="submit"
                  >
                    Sign up
                  </button>
                
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full  object-cover flex justify-center items-center"
            
          >
            <img src={ssign} alt="" />
          </div>
        </div>
      </div>
    </div>
    </form>
   
   </>
  );
};

export default Signin;
