import { useGroup } from "../../Providers/group";
import { useState, useEffect } from "react";
import { useAuth } from "../../Providers/auth";
import Card from "../Card";
import Modal from "../Modal";
import Button from "../Button";
import { CardGroups } from "./styles.js";
import { useUtilits } from "../../Providers/utilits";

const GroupContainer = () => {
  const { token, userId } = useAuth();
  const { modalOnGroups, setModalOnGroups } = useUtilits();
  const { getUserGroups, userGroup, getAllGroups, unsubscribeGroup } =
    useGroup();

  useEffect(() => {
    getAllGroups(userId, token);
    getUserGroups(token);
  }, []);

  const createForm = () => {
    setModalOnGroups(true);
  };

  const unsubscribe = (id) => {
    console.log(id);
    unsubscribeGroup(id);
  };

  const showInfo = () => { };

  return (
    <CardGroups>
      {!modalOnGroups ? (
        <>
          <button onClick={createForm}>Adicionar</button>
          {userGroup.map((item) => {
            return (
              <>
                <Card
                  onClick={showInfo}
                  secondary={true}
                  isGroup={true}
                  info={item}
                  key={item.id}
                />
                <button onClick={() => unsubscribe(item.id)}>Sair</button>
              </>
            );
          })}
        </>
      ) : (
        <Modal isGroup={true} />
      )
      }
    </CardGroups >
  );
};

export default GroupContainer;
