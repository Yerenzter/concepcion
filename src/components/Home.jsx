import axios from "axios";
import Concepcion from "../assets/concepcion.jpeg";
import { SetYoyo } from "./Dashboard";
import PropTypes from "prop-types";
import { useState } from "react";

async function Authorize(e) {
  e.preventDefault();

  const username = e.target.username.value;
  const password = e.target.password.value;

  const res = await axios.get("http://localhost:4435/accounts/login/auth");

  const account = res.data;

  for (let r = 0; r < account.length; r++) {
    if (
      username === account[r].account_username &&
      password === account[r].account_password
    )
      return (window.location.href = "/dashboard");
  }
}

export default function Home() {
  return (
    <div className="row p-10  h-screen bg-amber-50 justify-center">
      <div className="col-span-6 content-center justify-center center-align">
        <center>
          <div className="concepcion"></div>
        </center>
        <h1 className="text-3xl">
          Barangay Concepcion Information System, Monitoring and handling data
          transfer is better than before.
        </h1>
      </div>

      <div className="col-span-6 content-center px-24">
        <div className="card bg-gray-500">
          <div className="card-body p-10 center-align">
            <form onSubmit={Authorize}>
              <div className="input-field outlined mb-5">
                <input
                  id="username"
                  name="username"
                  placeholder=" "
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="username">Username</label>
              </div>

              <div className="input-field outlined mb-5">
                <input
                  id="password"
                  name="password"
                  placeholder=" "
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="username">Password</label>
              </div>

              <button
                className="btn bg-blue-500 waves-effect text-white"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}