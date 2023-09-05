import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { create, getAll } from "../mocks/data";
export const FriendContext = createContext();

const data = getAll();
const initialFriendData = { name: "", age: "", email: "" };

function FriendContextProvider({ children }) {
  const history = useHistory();
  const [friendData, setFriendData] = useState(initialFriendData);

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push("/friends");
    console.log(friendData);
  };

  const onChangeFunc = (e) => {
    const { name, value } = e.target;

    setFriendData({
      ...friendData,
      [name]: value,
    });
  };

  return (
    <FriendContext.Provider
      value={{ friendData, setFriendData, handleSubmit, onChangeFunc, data }}
    >
      {children}
    </FriendContext.Provider>
  );
}

export default FriendContextProvider;
