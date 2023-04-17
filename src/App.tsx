import "./App.css";
import Api, { UserReadFull } from "@timetac/js-client-library";
import { environment, authCredentials } from "./apiConfig";
import { useEffect, useState } from "react";

const api = new Api(environment);
function App() {
  const [userData, setUserData] = useState<UserReadFull>();
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    if (!authenticated) {
      api.authentication.login(authCredentials).then((tokensData) => {
        setAuthenticated(true);
      });
    }
  }, [authenticated]);

  useEffect(() => {
    if (authenticated && !userData) {
      api.users.readMe().then((meData) => {
        setUserData(meData.Results);
      });
    }
  }, [authenticated, userData]);

  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Welcome</a>
                  <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">TimeTrackings</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                TimeTac React Playground
              </h2>
              <h3 className="text-xl">Welcome {userData ? userData.fullname : '...'}</h3>

              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">

                <a href="https://api.timetac.com/" className="rounded-md bg-blue-500  text-white px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  API docs
                </a>
                <a href="https://github.com/TimeTac/js-client-library" className="rounded-md bg-blue-500  text-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  JS Client Library
                </a>

              </div>
              <div className="mt-10 justify-center gap-x-6 lg:justify-start">
                <p>Technologies used:</p>
                <ul>
                  <li className="list-disc ml-5">react 18</li>
                  <li className="list-disc ml-5">jest + testing library</li>
                  <li className="list-disc ml-5">tailwindcss</li>
                  <li className="list-disc ml-5">vite</li>
                </ul>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80"
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default App;
