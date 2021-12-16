import { useGroup } from "../../Providers/group";
import { useState, useEffect } from "react";
import { useAuth } from "../../Providers/auth";
import { FiPlus } from "react-icons/fi";

import { MdOutlineClose } from "react-icons/md";

import Card from "../Card";
import Modal from "../Modal";
import { CardGroups } from "./styles.js";
import { useUtilits } from "../../Providers/utilits";

const GroupContainer = () => {
  const { token, userId } = useAuth();
  const { modalOnGroups, setModalOnGroups, info } = useUtilits();
  const {
    getUserGroups,
    userGroup,
    setUserGroup,
    getAllGroups,
    unsubscribeGroup,
    searchedGroups,
    subscribeGroup,
  } = useGroup();
  const [loading, setLoading] = useState(true);
  const { setInfo } = useUtilits();

  useEffect(() => {
    getAllGroups(userId, token);
    getUserGroups(token, setLoading);
  }, []);

  if (info) {
    setUserGroup(searchedGroups);
  }

  const createForm = () => {
    setModalOnGroups(true);
  };

  const subscribe = (id) => {
    subscribeGroup(id);
    setInfo(false);
    getUserGroups(token, setLoading);
    getAllGroups();
  };

  const unsubscribe = (id) => {
    unsubscribeGroup(id);
  };

  const close = () => {
    setInfo(false);
    getUserGroups(token, setLoading);
    getAllGroups();
  };

  const showInfo = () => {};

  return (
    <CardGroups>
      {!modalOnGroups ? (
        <>
          {info ? (
            <button onClick={close} className="adc">
              <MdOutlineClose size={25} color="black" />
            </button>
          ) : (
            <button onClick={createForm} className="adc">
              <FiPlus size={25} color="black" />
            </button>
          )}

          {userGroup.map((item) => {
            return (
              <>
                <Card
                  interactFunc={info ? subscribe : unsubscribe}
                  onClick={showInfo}
                  secondary={true}
                  isGroup={true}
                  info={item}
                  key={item.id}
                />
              </>
            );
          })}
        </>
      ) : (
        <Modal isGroup={true} />
      )}
    </CardGroups>
  );
};

export default GroupContainer;
