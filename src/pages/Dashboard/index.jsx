import { Redirect } from "react-router-dom";
import { useContext } from "react";
import CardHabits from "../../components/Habits";

const Dashboard = () => {
  return (
    <div>
      <h1>dashboard</h1>
      {/* <div className="habits-container">
        {habits === undefined && (
          <div className="container-habits">
            <h2>Meus Hábitos</h2>
            {habits.map((item) => {
              return <CardHabits item={item} />;
            })}
          </div>
        )}
      </div> */}
    </div>
  );
};
export default Dashboard;
