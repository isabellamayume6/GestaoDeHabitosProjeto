import { useEffect } from "react";
import { useAuth } from "../../Providers/auth";
import { useHabits } from "../../Providers/habits";
import Card from "../Card";

const HabitContainer = () => {
  const { getHabits, allHabits } = useHabits();
  const { token } = useAuth();

  useEffect(() => {
    getHabits(JSON.parse(token));
  }, []);

  console.log("allHabits", allHabits);
  return (
    <div className="habits">
      <h2>Hábitos</h2>
      <ul>
        {allHabits.map((item) => {
          return (
            <li>
              <Card secondary={false} isGroup={false} info={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HabitContainer;
