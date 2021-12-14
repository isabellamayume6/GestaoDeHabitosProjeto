import { createContext, useState, useContext } from "react";
import Api from "../../services/Api";
import { useAuth } from "../auth";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [allHabits, setAllHabits] = useState(["foi"]);
  const { userId } = useAuth();

  const createHabit = (token, data) => {
    data.user = userId;

    Api.post("/habits/", data, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        console.log("response createHabit:", response);
      })
      .catch((err) => console.log("Erro ao criar hábito!"));
  };

  const getHabits = (token) => {
    Api.get("/habits/personal/", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        // console.log("response getHabits:", response);
        return setAllHabits(response.data);
      })
      .catch((err) => console.log("Erro ao pegar hábitos!"));
  };

  const updateHabit = (token, data, habitId) => {
    Api.patch(`/habits/${habitId}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => console.log("response updateHabit:", response))
      .catch((err) => console.log("Erro ao modificar hábito!"));
  };

  const deleteHabit = (token, habitId) => {
    Api.delete(`/habits/${habitId}`, {
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
