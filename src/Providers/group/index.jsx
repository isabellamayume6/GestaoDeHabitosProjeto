import { createContext, useState, useContext } from "react";
import api from "../../services/Api";
import { useAuth } from "../auth";
import { toast } from "react-hot-toast";

export const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
  const [allGroups, setAllGroups] = useState([]);
  const [userGroup, setUserGroup] = useState([]);
  const [myGroups, setMyGroups] = useState([]);
  const [searchedGroups, setSearchedGroups] = useState([]);

  const { token } = useAuth();

  const getAllGroups = () => {
    api
      .get("/groups/")
      .then((response) => {
        setAllGroups(response.data.results);
      })
      .catch((err) => console.log("Erro ao pegar todos os grupos!"));
  };

  const searchGroups = (search) => {
    api
      .get(`/groups/?search=${search}`)
      .then((response) => {
        setSearchedGroups(response.data.results);
      })
      .catch((err) => console.log("erro search", err));
  };

  const getUserGroups = (token, setLoading) => {
    api
      .get("/groups/subscriptions/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (!!setLoading) {
          setLoading(false);
        }
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
        setUserGroup([...userGroup, response.data]);
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
        getAllGroups();
      })
      .catch((err) => toast.error("Usuário já inscrito!"));
  };

  const unsubscribeGroup = (groupId) => {
    api
      .delete(`/groups/${groupId}/unsubscribe/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        getUserGroups(token);
      })
      .catch((err) => console.log("Erro ao se desinscrever do grupo!"));
  };

  return (
    <GroupContext.Provider
      value={{
        allGroups,
        setAllGroups,
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
        myGroups,
        searchGroups,
        searchedGroups,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export const useGroup = () => useContext(GroupContext);
