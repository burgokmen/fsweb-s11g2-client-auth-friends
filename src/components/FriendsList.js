import React from "react";

export default function FriendsList() {
  const data = [
    {
      id: 4,
      name: "Rachel Green",
      age: 30,
      email: "rachel@friends.com",
    },
    {
      id: 5,
      name: "Joey Tribbiani",
      age: 34,
      email: "joey@friends.com",
    },
  ];

  return (
    <div className="login-div">
      <h1 className="text-bold">Friends List</h1>
      <div>
        {data.map((f) => (
          <p className="text-bold" key={f.id}>
            - {f.name} - {f.email}
          </p>
        ))}
      </div>
    </div>
  );
}
