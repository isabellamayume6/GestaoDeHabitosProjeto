import { createContext, useContext, useState } from "react";

export const UtilitsContext = createContext();

export const UtilitsProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [id, setId] = useState(0);
  const [modalOnHabits, setModalOnHabits] = useState(false);
  const [modalOnGroups, setModalOnGroups] = useState(false);
  const [showHabits, setShowHabits] = useState(true);
  const [info, setInfo] = useState(false);

  const [search, setSearch] = useState("");

  return (
    <UtilitsContext.Provider
      value={{
        modal,
        setModal,
        modalEdit,
        setModalEdit,
        id,
        setId,
        showHabits,
        setShowHabits,
        modalOnHabits,
        setModalOnHabits,
        modalOnGroups,
        setModalOnGroups,
        info,
        setInfo,
        search,
        setSearch,
      }}
    >
      {children}
    </UtilitsContext.Provider>
  );
};

export const useUtilits = () => useContext(UtilitsContext);
