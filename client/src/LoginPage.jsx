import React from 'react';
import { useState } from "react";
// import "../App.css";
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router';
// import img from "./imgg.jpg"
// import { useRouter } from './hooks';


export default function LoginPage() {

  const [values ,setValues] = useState({
    userName: "",
    password: ""
  });

  const { setUser, setIsLoggedIn } = React.useContext(AuthContext);
  // const navigate = useNavigate();
  // const router = useRouter();

  const handleInputChange = e => {
    const { name, value ,} = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleLogin = () => {
    setUser({ userName: values["userName"] });
    setIsLoggedIn(true);
      // router.push('/index');
    // navigate('/');
  };
  return (
    <>
      <div className="login flex min-h-full flex-row justify-center px-6 py-12 lg:px-8">
    {/* <div className="flex">
    <b>  TIWARI SETH &rarr;</b>
      <img src={img} alt="" width="600px" />
      <b> &larr; TIWARI SETH</b>
    </div> */}
        {/* <div className="class">
          {/ * <img src={img} alt="" width="40px" /> * /}
        </div> */}
        <div className="flex flex-col">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleInputChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleLogin}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
        </div>
      </div>
    </>
  );
}
