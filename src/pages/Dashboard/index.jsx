import HabitContainer from "../../components/Habits";
import GroupContainer from "../../components/Groups";
import Modal from "../../components/Modal";
import { useState } from "react";

const Dashboard = () => {
  const [isGroup, setIsGroup] = useState(false);

  return (
    <div>
      <Modal isGroup={isGroup} />
      <HabitContainer />
      {/* <CreateHabitForm /> */}
      <GroupContainer />
    </div>
  );
};

export default Dashboard;
