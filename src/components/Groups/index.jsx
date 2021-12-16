import { useGroup } from "../../Providers/group";
import { useState, useEffect } from "react";
import { useAuth } from "../../Providers/auth";
import { FiPlus } from "react-icons/fi";

import Card from "../Card";
import Modal from "../Modal";
import { CardGroups } from "./styles.js";
import { useUtilits } from "../../Providers/utilits";

const GroupContainer = () => {
  const { token, userId } = useAuth();
  const { modalOnGroups, setModalOnGroups } = useUtilits();
  const { getUserGroups, userGroup, getAllGroups, unsubscribeGroup } =
    useGroup();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllGroups(userId, token);
    getUserGroups(token, setLoading);
  }, []);

  const createForm = () => {
    setModalOnGroups(true);
  };

  const unsubscribe = (id) => {
    unsubscribeGroup(id);
  };

  const showInfo = () => {};

  return (
    <CardGroups>
      {!modalOnGroups ? (
        <>
          <button onClick={createForm} className="adc">
            <FiPlus size={25} color="black" />
          </button>
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
      )}
    </CardGroups>
  );
};

export default GroupContainer;
