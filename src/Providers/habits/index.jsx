import { createContext, useState, useContext } from "react";
import Api from "../../services/Api";
import { useAuth } from "../auth";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const { token } = useAuth();

  const gethabits = () => {
    Api.get("/habits/personal/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setHabits(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <HabitsContext.Provider value={{ habits, gethabits }}>
      {children}
    </HabitsContext.Provider>
  );
};
