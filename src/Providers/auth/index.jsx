import { createContext, useState, useContext } from "react";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // eslint-disable-next-line
  const [token, setToken] = useState(
    localStorage.getItem("@GestaoHabitos:token") || ""
  );

  // eslint-disable-next-line
  const [userId, setUserId] = useState("");

  const defineUser = (token) => {
    const { user_id } = jwt_decode(token);
    setToken(token);
    setUserId(user_id);
  };

  return (
    <AuthContext.Provider value={{ token, userId, defineUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
