import { useState } from "react";
import Button from "../Button";
import TextInput from "../TextInput";
import { useUtilits } from "../../Providers/utilits";

const Header = () => {
  const { setInfo, search, setSearch } = useUtilits();

  const result = () => {
    setInfo(true);
  };

  return (
    <header>
      <div className="User">
        <img alt="user"></img>
      </div>
      <input
        label={"Pesquisar"}
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <Button onClick={result}>Pesquisar</Button>
    </header>
  );
};

export default Header;
