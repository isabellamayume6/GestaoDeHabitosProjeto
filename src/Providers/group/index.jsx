import { createContext, useState, useContext } from "react";
import api from "../../services/Api";
import { useAuth } from "../auth";

export const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
  const [allGroups, setAllGroups] = useState([]);
  const [userGroup, setUserGroup] = useState([]);

  const { token } = useAuth();

  const getAllGroups = () => {
    api
      .get("/groups/")
      .then((response) => {
        console.log("response getAllGroups", response);
        setAllGroups(response.data.results);
      })
      .catch((err) => console.log("Erro ao pegar todos os grupos!"));
  };

  const getUserGroups = () => {
    api
      .get("/groups/subscriptions/", "", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("response getUserGroups:", response.data);
        setUserGroup(response.data);
      })
      .catch((err) => console.log("Erro ao pegar os grupos do usuário!"));
  };

  const getGoalsGroup = (groupId) => {
    api
      .get(`/goals/?group=${groupId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("response getGoalsGroup:", response.data.results);
      })
      .catch((err) => console.log("Erro ao pegar os goals do grupo!"));
  };

  const getActivitiesGroup = (groupId) => {
    api
      .get(`/activities/?group=${groupId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("response getActivitiesGroup:", response.data.results);
      })
      .catch((err) => console.log("Erro ao pegar as activities do grupo!"));
  };

  const createGroup = (data) => {
    api
      .post("/groups/", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("response createGroup:", response.data);
      })
      .catch((err) => console.log("Erro ao crear grupo!"));
  };

  const updateGroup = (data, groupId) => {
    api
      .patch(`/groups/${groupId}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("response updateGroup:", response);
      })
      .catch((err) => console.log("Erro ao atualizar grupo!"));
  };

  const subscribeGroup = (groupId) => {
    api
      .post(`/groups/${groupId}/subscribe/`, "", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("response subscribeGroup:", response);
      })
      .catch((err) => console.log("Erro ao se inscrver no grupo!"));
  };

  const unsubscribeGroup = (groupId) => {
    api
      .post(`/groups/${groupId}/unsubscribe/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("response unsubscribeGroup:", response);
      })
      .catch((err) => console.log("Erro ao se desinscrever do grupo!"));
  };

  return (
    <GroupContext.Provider
      value={{
        allGroups,
        getAllGroups,
        getUserGroups,
        userGroup,
        setUserGroup,
        getGoalsGroup,
        getActivitiesGroup,
        createGroup,
        updateGroup,
        subscribeGroup,
        unsubscribeGroup,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export const useGroup = () => useContext(GroupContext);
