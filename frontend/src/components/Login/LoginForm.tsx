"use client";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { IoIosLock } from "react-icons/io";
import { IoMail } from "react-icons/io5";

const LoginForm = () => {
  // useEffect(() => {
  //   if (user) {
  //     window.location.href = "/"; // Replace '/dashboard' with the desired page
  //   }
  // }, [user]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    auth.loginUser({ email, password });
  };

  return (
    <div className="h-screen bg-gradient-to-tr from-cyan-400 to-fuchsia-500 flex justify-center items-center">
      <div className="py-10 md:py-12 xl:py-20 px-5 lg:px-0 flex justify-center items-center w-full">
        <div className="bg-white px-8 md:px-10 lg:px-16 py-14 rounded-xl w-full max-w-lg">
          <h2 className="text-2xl xl:text-4xl font-semibold text-center">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="mt-10 ">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block font-medium text-gray-400"
              >
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-gray-400">
                  <IoMail size={18} />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email-address-icon"
                  className="bg-white border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-b-gray-400 w-full ps-10 p-2.5  "
                  placeholder="example@email.com"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block font-medium text-gray-400"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-gray-400">
                  <IoIosLock size={18} />
                </div>
                <input
                  type="password"
                  name="password"
                  id="password-icon"
                  className="bg-white border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-b-gray-400 w-full ps-10 p-2.5  "
                  placeholder="Type your password"
                  required
                />
              </div>
            </div>
            <div className="text-right mt-1">
              <Link
                href="/"
                className="text-gray-400 text-sm hover:underline hover:text-blue-600 hover:font-medium duration-300"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="mt-7">
              <button
                type="submit"
                className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-cyan-400 rounded-full py-2 px-8 w-full text-lg font-semibold text-white transition-colors duration-500"
              >
                Login
              </button>
            </div>

            <div className="text-center mt-10 space-y-3">
              <p>Don't have an account?</p>
              <div className="outline outline-4 outline-gray-300 hover:outline-0 -outline-offset-4 hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-cyan-400 group p-1 flex justify-center items-center w-fit mx-auto rounded-full">
                <div className="w-full h-full bg-white rounded-full">
                  <Link
                    href="/signup"
                    className="rounded-full py-1 px-8 text-sm font-semibold transition-colors duration-500 "
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
