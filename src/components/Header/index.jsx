import { useState } from "react";
import Button from "../Button";
import TextInput from "../TextInput";
import { useUtilits } from "../../Providers/utilits";
import { useAuth } from "../../Providers/auth";
import { useGroup } from "../../Providers/group";

const Header = () => {
  const { setInfo, search, setSearch } = useUtilits();
  const { logout } = useAuth();
  const { searchGroups } = useGroup();

  const result = () => {
    setInfo(true);
    searchGroups(search);
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
      <Button onClick={logout}>Sair</Button>
    </header>
  );
};

export default Header;
