import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { AuthContext } from "../../Providers/auth";
import { useContext } from "react";
import CardHabits from "../../components/Habits";
import { HabitsListContext } from "../../Providers/habitsList";

const Dashboard = () => {
  const { auth } = useContext(AuthContext);

  const { habits, getHabits } = useContext(HabitsListContext);

  console.log(getHabits());

  if (!auth) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>dashboard</h1>
      <div className="habits-container">
        {habits === undefined && (
          <div className="container-habits">
            <h2>Meus Hábitos</h2>
            {habits.map((item) => {
              return <CardHabits item={item} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default Dashboard;
