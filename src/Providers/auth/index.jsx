import { createContext, useState } from "react";
import toast from "react-hot-toast";
import Api from "../../services/Api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  //   const [token, setToken] = useState(
  //     JSON.parse(localStorage.getItem("@GestaoHabitos:token")) || ""
  //   );

  const access = async (data) => {
    setToken(!token);

    // await Api.post("/sessions/", data).then((response) => {
    //   toast.success("Login realizado");
    //   localStorage.setItem(
    //     "GestaoHabitos:token",
    //     JSON.stringify(response.data.access)
    //   );
    // });
  };

  return (
    <AuthContext.Provider value={{ token, access }}>
      {children}
    </AuthContext.Provider>
  );
};
