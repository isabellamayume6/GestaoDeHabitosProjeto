import { createContext, useState, useContext } from "react";
import api from "../../services/api";
import { useAuth } from "../auth";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [allHabits, setAllHabits] = useState([]);
  const { userId } = useAuth();

  const createHabit = (token, data) => {
    data.user = userId;

    api
      .post("/habits/", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("response createHabit:", response);
      })
      .catch((err) => console.log("Erro ao criar hábito!"));
  };

  const getHabits = (token) => {
    api
      .get("/habits/personal/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("response getHabits:", response);
        setAllHabits(response.data);
      })
      .catch((err) => console.log("Erro ao pegar hábitos!"));
  };

  const updateHabit = (token, data, habitId) => {
    api
      .patch(`/habits/${habitId}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => console.log("response updateHabit:", response))
      .catch((err) => console.log("Erro ao modificar hábito!"));
  };

  const deleteHabit = (token, habitId) => {
    api
      .delete(`/habits/${habitId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => console.log("response deleteHabit:", response))
      .catch((err) => console.log("Erro ao deletar hábito!"));
  };

  return (
    <HabitsContext.Provider
      value={{
        allHabits,
        setAllHabits,
        createHabit,
        getHabits,
        updateHabit,
        deleteHabit,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => useContext(HabitsContext);
