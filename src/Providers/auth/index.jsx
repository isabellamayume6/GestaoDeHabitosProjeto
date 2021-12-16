import { createContext, useState, useContext } from "react";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const history = useHistory();

  // eslint-disable-next-line
  const [token, setToken] = useState(
    localStorage.getItem("@GestaoHabitos:token") || ""
  );

  const [isLogged, setIsLogged] = useState(
    !!localStorage.getItem("@GestaoHabitos:token") || false
  );

  // eslint-disable-next-line
  const [userId, setUserId] = useState("");

  const defineUser = (token) => {
    const { user_id } = jwt_decode(token);
    setToken(token);
    setUserId(user_id);
    setIsLogged(true);
  };

  const logout = () => {
    setToken("");
    setIsLogged(false);
    setUserId("");
    localStorage.removeItem("@GestaoHabitos:token");
    history.push("/");
  };

  return (
    <AuthContext.Provider
      value={{ token, userId, defineUser, isLogged, setIsLogged, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
