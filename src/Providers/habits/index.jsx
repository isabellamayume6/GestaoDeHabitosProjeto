import { createContext, useState, useContext } from "react";
import { get } from "react-hook-form";
import Api from "../../services/Api";
import { useAuth } from "../auth";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [allHabits, setAllHabits] = useState([]);
  const { token, userId } = useAuth();

  const createHabit = (token, data) => {
    Api.post("/habits/", data, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        console.log("response createHabit:", response);
        setAllHabits([...allHabits, response.data]);
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

  const deleteHabit = (habit_id) => {
    console.log("fui chamado:", token);
    Api.delete(`/habits/${habit_id}/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => getHabits(token))
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
