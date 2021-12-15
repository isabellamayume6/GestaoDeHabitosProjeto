import HabitContainer from "../../components/Habits";
import GroupContainer from "../../components/Groups";

const Dashboard = () => {
  return (
    <div>
      <HabitContainer />
      {/* <CreateHabitForm /> */}
      <GroupContainer />
    </div>
  );
};

export default Dashboard;
