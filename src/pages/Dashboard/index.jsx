import HabitContainer from "../../components/Habits";
import GroupContainer from "../../components/Groups";
import Modal from "../../components/Modal";
import SearchResult from "../../components/Search";

import Header from "../../components/Header";

import { useState } from "react";
import { MainDashboard } from "./styles.js";
import { Group } from "./styles.js";
import { useUtilits } from "../../Providers/utilits";

const Dashboard = () => {
  const { isGroup, modalOn, showHabits, setShowHabits, info } = useUtilits();

  return (
    <>
      {/* <Modal isGroup={isGroup} modalOn={modalOn} /> */}
      <Header />
      <Group showHabits={showHabits}>
        <button onClick={() => setShowHabits(true)}>Meus hábitos</button>
        <button onClick={() => setShowHabits(false)}>Meus grupos</button>
      </Group>
      <MainDashboard showHabits={showHabits}>
        {showHabits === true ? <HabitContainer /> : <GroupContainer />}
      </MainDashboard>
    </>
  );
};

export default Dashboard;
