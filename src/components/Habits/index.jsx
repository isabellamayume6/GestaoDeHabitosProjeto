import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHabits(token, setLoading);
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
          <button className="ADC" onClick={createForm}>
            <FiPlus size={25} color="black" />
          </button>
          {allHabits.map((item) => {
            return (
              <>
                <Card
                  interactFunc={remove}
                  secondary={false}
                  isGroup={false}
                  info={item}
                  key={item.id}
                />
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
