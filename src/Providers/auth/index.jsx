import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";
import Api from "../../services/Api";
import jwt_decoded from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("@GestaoHabitos:token") || ""
  );

  const { user_id } = jwt_decoded(token);

  const [userId, setUserId] = useState(user_id);

  const access = async (data) => {
    await Api.post("/sessions/", data)
      .then((response) => {
        toast.success("Login realizado");
        localStorage.setItem(
          "@GestaoHabitos:token",
          JSON.stringify(response.data.access)
        );
        setToken(response.data.access);
      })
      .catch((err) => toast.error("Usuário ou senha inválida!"));
  };

  return (
    <AuthContext.Provider value={{ token, userId, access }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
