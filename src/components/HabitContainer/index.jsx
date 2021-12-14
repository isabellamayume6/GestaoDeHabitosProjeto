import { useEffect } from "react";
import HabitsCard from "../HabitsCard";
import { useAuth } from "../../providers/auth";
import { useHabits } from "../../providers/habits";

import "./style.css";

const HabitContainer = () => {
  const { getHabits, allHabits } = useHabits();
  const { token } = useAuth();

  useEffect(() => {
    getHabits(JSON.parse(token));
  });

  console.log("allHabits", allHabits);
  return (
    <div className="habits">
      <h2>Hábitos</h2>
      <ul>
        {allHabits.map((item) => {
          return (
            <li>
              <HabitsCard
                title={item.title}
                category={item.category}
                frequency={item.frequency}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HabitContainer;
