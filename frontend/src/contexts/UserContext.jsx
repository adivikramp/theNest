/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: localStorage.getItem("email"),
    orders: [],
    feedbacks: [],
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
