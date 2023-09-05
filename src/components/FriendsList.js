import React, { useContext } from "react";
import { FriendContext } from "../contexts/FriendContext";

export default function FriendsList() {
  const { friendData } = useContext(FriendContext);
  return (
    <div className="login-div">
      <h1 className="text-bold">Friends List</h1>
      <div>
        {friendData.map((f) => (
          <p className="text-bold" key={f.id}>
            - {f.name} - {f.email}
          </p>
        ))}
      </div>
    </div>
  );
}
