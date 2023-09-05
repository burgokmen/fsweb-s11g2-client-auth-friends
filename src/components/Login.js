import React from "react";

export default function Login() {
  return (
    <form className="login-div">
      <h1>LOGIN</h1>
      <div className="input-flex">
        <label className="text-bold" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          name="username"
          size="50"
          className="input-box"
        />
      </div>
      <div className="input-flex">
        <label className="text-bold" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="text"
          id="password"
          name="password"
          size="50"
          className="input-box"
        />
      </div>
      <button className="text-bold">SUBMIT</button>
    </form>
  );
}
