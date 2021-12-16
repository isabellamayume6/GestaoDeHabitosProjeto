import { useEffect } from "react";

import { useAuth } from "../../Providers/auth";
import { useHabits } from "../../Providers/habits";
import { useUtilits } from "../../Providers/utilits";

import { CardHabits } from "./styles.js";

import Card from "../Card";
import Modal from "../Modal";
import Button from "../Button";

const HabitContainer = () => {
  const { token } = useAuth();
  const { modalOnHabits, setModalOnHabits } = useUtilits();
  const { getHabits, allHabits, deleteHabit } = useHabits();

  useEffect(() => {
    getHabits(token);
  }, []);

  const createForm = () => {
    setModalOnHabits(true);
  };

  const remove = (id) => {
    console.log(id);
    deleteHabit(id);
  };

  console.log("allHabits", allHabits);
  return (
    <CardHabits>
      {!modalOnHabits ? (
        <>
          <button onClick={createForm}>Adicionar</button>
          {allHabits.map((item) => {
            return (
              <>
                <Card
                  secondary={false}
                  isGroup={false}
                  info={item}
                  key={item.id}
                />
                <button onClick={() => remove(item.id)}>Deletar</button>
              </>
            );
          })}
        </>
      ) : (
        <Modal isGroup={false} />
      )}
    </CardHabits>
  );
};

export default HabitContainer;
