import { useEffect } from "react";
import { useAuth } from "../../Providers/auth";
import { useHabits } from "../../Providers/habits";
import { CardHabits } from "./styles.js"
import Card from "../Card";

const HabitContainer = () => {
  const { getHabits, allHabits } = useHabits();
  const { token } = useAuth();

  useEffect(() => {
    getHabits(token);
  }, []);

  console.log("allHabits", allHabits);
  return (
    <CardHabits >
      {allHabits.map((item) => {
        return (
          <Card secondary={false} isGroup={false} info={item} key={item.id} />
        );
      })}
    </CardHabits >
  );
};

export default HabitContainer;
