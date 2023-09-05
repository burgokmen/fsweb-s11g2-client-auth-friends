import React, { useContext } from "react";
import { FriendContext } from "../contexts/FriendContext";

export default function AddFriend() {
  const { handleSubmit, onChangeFunc } = useContext(FriendContext);

  return (
    <form onSubmit={handleSubmit} className="login-div">
      <h1>ADD FRIEND</h1>
      <div className="input-flex">
        <label className="text-bold" htmlFor="name">
          FRIEND NAME
        </label>
        <input
          type="text"
          id="name"
          name="name"
          size="50"
          className="input-box"
          onChange={onChangeFunc}
        />
      </div>
      <div className="input-flex">
        <label className="text-bold" htmlFor="email">
          FRIEND EMAIL
        </label>
        <input
          type="email"
          id="email"
          name="email"
          size="50"
          className="input-box"
          onChange={onChangeFunc}
        />
      </div>
      <button className="text-bold">SUBMIT</button>
    </form>
  );
}
