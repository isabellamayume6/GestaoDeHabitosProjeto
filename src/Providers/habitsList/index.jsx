import { createContext, useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import Api from "../../services/Api.js";
import jwt_decode from "jwt-decode";
import { AuthContext } from "../auth/index.jsx";

export const HabitsListContext = createContext();

export const HabitsListProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  //   const { token } = useContext(AuthContext);
  //   const { decodedToken } = jwt_decode(token);

  const notifyGetHabits = () => toast.error("Erro ao carregar os hábitos");

  const getHabits = (token) => {
    Api.get("/habits/personal/", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        setHabits(response.data);
      })
      .catch((err) => notifyGetHabits);
  };

  return (
    <HabitsListContext.Provider value={{ habits, getHabits }}>
      {children}
    </HabitsListContext.Provider>
  );
};

export const useHabits = () => useContext(HabitsListContext);
