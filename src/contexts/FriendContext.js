import React, { createContext, useState } from "react";
import { getAll } from "../mocks/data";
export const FriendContext = createContext();

const data = getAll();

function FriendContextProvider({ children }) {
  const [friendData, setFriendData] = useState(data);
  return (
    <FriendContext.Provider value={{ friendData }}>
      {children}
    </FriendContext.Provider>
  );
}

export default FriendContextProvider;
