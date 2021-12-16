import HabitContainer from "../../components/Habits";
import GroupContainer from "../../components/Groups";
import SearchResult from "../../components/Search";
import Header from "../../components/Header";
import { MainDashboard } from "./styles.js";
import { Group } from "./styles.js";
import { useUtilits } from "../../Providers/utilits";
import { useAuth } from "../../Providers/auth";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const { showHabits, setShowHabits, info } = useUtilits();
  const { isLogged } = useAuth();

  if (!isLogged) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header />
      <Group showHabits={showHabits}>
        <button onClick={() => setShowHabits(true)}>Meus hábitos</button>
        <button onClick={() => setShowHabits(false)}>Meus grupos</button>
      </Group>
      <MainDashboard showHabits={showHabits}>
        <div className="mobile">
          {info ? (
            <SearchResult />
          ) : (
            <>{showHabits === true ? <HabitContainer /> : <GroupContainer />}</>
          )}
        </div>
        <div className="desktop">
          {info ? (
            <SearchResult />
          ) : (
            <>
              <div className="habitosCard">
                <HabitContainer />
              </div>
              <div className="gruposCard">
                <GroupContainer />
              </div>
            </>
          )}
        </div>
      </MainDashboard>
    </>
  );
};

export default Dashboard;
