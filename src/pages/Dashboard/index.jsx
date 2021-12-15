import HabitContainer from "../../components/Habits";
import GroupContainer from "../../components/Groups";
import Modal from "../../components/Modal";
import { useState } from "react";
import Edit from "../../components/Edit";

const Dashboard = () => {
  const [isHabit, setIsHabit] = useState(true);
  const [isGroup, setIsGroup] = useState(true);

  return (
    <div>
      <Modal isGroup={isGroup} />
      <Edit isHabit={isHabit} />
      <HabitContainer />
      <GroupContainer />
    </div>
  );
};

export default Dashboard;
