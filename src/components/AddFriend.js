import React from "react";

export default function AddFriend() {
  return (
    <form className="login-div">
      <h1>ADD FRIEND</h1>
      <div className="input-flex">
        <label className="text-bold" htmlFor="friendname">
          FRIEND NAME
        </label>
        <input
          type="text"
          id="friendname"
          name="friendname"
          size="50"
          className="input-box"
        />
      </div>
      <div className="input-flex">
        <label className="text-bold" htmlFor="friendemail">
          FRIEND EMAIL
        </label>
        <input
          type="email"
          id="friendemail"
          name="friendemail"
          size="50"
          className="input-box"
        />
      </div>
      <button className="text-bold">SUBMIT</button>
    </form>
  );
}
