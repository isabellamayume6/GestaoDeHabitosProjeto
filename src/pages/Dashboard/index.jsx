import HabitContainer from "../../components/Habits";
import GroupContainer from "../../components/Groups";
import Modal from "../../components/Modal";
import { useState } from "react";
import { MainDashboard } from './styles.js'
import { Group } from './styles.js'

const Dashboard = () => {
  const [isGroup, setIsGroup] = useState(true);
  const [modalOn, setModalOn] = useState(false);
  const [showHabits, setShowHabits] = useState(true);


  return (

    <>
      <Modal isGroup={isGroup} modalOn={modalOn} />
      <Group>
        <button onClick={() => setShowHabits(true)}>Meus hábitos</button>
        <button onClick={() => setShowHabits(false)}>Meus grupos</button>
      </Group>
      <MainDashboard showHabits={showHabits}>
        {showHabits === true ? (<HabitContainer />) : (<GroupContainer />)}
      </MainDashboard>
    </>
  );
};

export default Dashboard;
