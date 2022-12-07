import React, { useState } from "react";

import { ACCESS_TOKEN } from "../common/constants";
import { createBrowserHistory } from 'history';
import { login, AuthVerify } from "../util/ApiUtil";

const history = createBrowserHistory();

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  setTimeout(() => {
    setUsernameError("");
    setPasswordError("");
  }, 5000);

  const handleSubmit = () => {
    if (username === "" || password === "") {
      if (username === "") setUsernameError("Please enter username.");
      if (password === "") setPasswordError("Please enter password.");
    } else {
      const loginRequest = { username: username, password: password };
      login(loginRequest)
        .then((response) => {
          if (response.jwtResponse && response.jwtResponse.token)
            localStorage.setItem(ACCESS_TOKEN, response.jwtResponse.token);

          if (AuthVerify()) {
            history.push("/");
            window.location.reload();
          }
        })
        .catch((error) => {
          if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
        });
    }
  };

  return (
    <>
      <div className="container mx-auto block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <form action="">
          <div class="form-group mb-6">
            <input
              type="text"
              class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="username"
              name="username"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span
              style={{ fontSize: "12px", fontWeight: "bold", color: "#FF0000" }}
            >
              {usernameError}
            </span>
          </div>
          <div class="form-group mb-6">
            <input
              type="password"
              class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              style={{ fontSize: "12px", fontWeight: "bold", color: "#FF0000" }}
            >
              {passwordError}
            </span>
          </div>

          <button
            type="button"
            id="signin"
            name="signin"
            class="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            onClick={handleSubmit}
          >
            Sign in
          </button>
        </form>
      </div>
      <div class="container mx-auto block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <a href="signup" title="Sign Up">
          <button
            type="button"
            id="signup"
            name="signup"
            class="
      w-full
      px-6
      py-2.5
      bg-purple-500
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Sign Up
          </button>
        </a>
      </div>
    </>
  );
};

export default Login;
