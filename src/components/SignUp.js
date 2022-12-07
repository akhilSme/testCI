import React, { useState } from "react";

import { createBrowserHistory } from 'history';
import { signup } from "../util/ApiUtil";

const history = createBrowserHistory();

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [isadmin, setIsadmin] = useState(false);
  const [sques1, setSqes1] = useState("");
  const [sans1, setSans1] = useState("");
  const [sques2, setSqes2] = useState("");
  const [sans2, setSans2] = useState("");
  const [sques3, setSqes3] = useState("");
  const [sans3, setSans3] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  setTimeout(() => {
    setUsernameError("");
    setPasswordError("");
  }, 5000);

  const handleSubmit = (e) => {
    // e.preventDefault();

    if (username === "" || password === "") {
      if (username === "") setUsernameError("Please enter username.");
      if (password === "") setPasswordError("Please enter password.");
    } else {
      const signupRequest = {
        username: username,
        password: password,
        firstName: fname,
        lastName: lname,
        emailId: email,
        isAdmin: isadmin,
        address: address,
        cityName: city,
        country: country,
        phone: phone,
        securityQuestion1: sques1,
        securityAnswer1: sans1,
        securityQuestion2: sques2,
        securityAnswer2: sans2,
        securityQuestion3: sques3,
        securityAnswer3: sans3,
      };
      signup(signupRequest)
        .then((response) => {
          console.log(response);

          history.push("/login");
          window.location.reload();
        })
        .catch((error) => {
          console.log("Error", error.message);
        });
    }
  };

  return (
    <>
      <div className="container mx-auto block p-6 rounded-lg shadow-lg bg-white max-w-md">
        <form action="">
          <div class="form-group form-check text-center mb-6">
            <label
              class="form-check-label inline-block text-gray-800"
              for="exampleCheck25"
            >
              Register for Weather App
            </label>
          </div>
          <div class="grid grid-cols-2 gap-4">
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
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#FF0000",
                }}
              >
                {usernameError}
              </span>
            </div>
            <div class="form-group mb-6">
              <input
                type="password"
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
                id="password"
                placeholder="User Pasword"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#FF0000",
                }}
              >
                {passwordError}
              </span>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
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
                id="fname"
                placeholder="First name"
                name="fname"
                value={fname}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
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
                id="lname"
                placeholder="Last name"
                name="lname"
                value={lname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="form-group mb-6">
              <input
                type="email"
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
                id="email"
                placeholder="Email Id"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
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
                id="address"
                placeholder="Address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
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
                id="city"
                placeholder="City"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
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
                id="country"
                placeholder="Country"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="form-group mb-6">
              <input
                type="number"
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
                id="phone"
                placeholder="Phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="checkbox"
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                id="isadmin"
                name="isadmin"
                value={isadmin}
                onChange={(e) => setIsadmin(e.target.value)}
              ></input>
              <label
                class="form-check-label inline-block text-gray-800"
                for="exampleCheck25"
              >
                Admin
              </label>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
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
                id="sques1"
                placeholder="Security Question 1"
                name="sques1"
                value={sques1}
                onChange={(e) => setSqes1(e.target.value)}
              />
            </div>
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
                id="sans1"
                placeholder="Security Answer 1"
                name="sans1"
                value={sans1}
                onChange={(e) => setSans1(e.target.value)}
              />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
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
                id="sques2"
                placeholder="Security Question 2"
                name="sques2"
                value={sques2}
                onChange={(e) => setSqes2(e.target.value)}
              />
            </div>
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
                id="sans2"
                placeholder="Security Answer 2"
                name="sans2"
                value={sans2}
                onChange={(e) => setSans2(e.target.value)}
              />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
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
                id="sques3"
                placeholder="Security Question 3"
                name="sques3"
                value={sques3}
                onChange={(e) => setSqes3(e.target.value)}
              />
            </div>
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
                id="sans3"
                placeholder="Security Answer 3"
                name="sans3"
                value={sans3}
                onChange={(e) => setSans3(e.target.value)}
              />
            </div>
          </div>

          <button
            type="button"
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
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
