import { createContext, useState, useContext } from "react";
import Api from "../../services/Api";
import { useAuth } from "../auth";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const { userId } = useAuth();

  const users = () => {
    Api.get("/users/")
      .then((response) => response.results)
      .catch((err) => console.log(err));
  };

  const userLogin = () => {
    Api.get(`/users/${userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider value={{ user, users, userLogin }}>
      {children}
    </UserContext.Provider>
  );
};
