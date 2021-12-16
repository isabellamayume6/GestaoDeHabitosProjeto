import { useState } from "react";
import Button from "../Button";
import TextInput from "../TextInput";
import { FiSearch } from 'react-icons/fi'
import { useUtilits } from "../../Providers/utilits";
import { useAuth } from "../../Providers/auth";
import { useGroup } from "../../Providers/group";
import { HeaderCard, DivSearch } from './styledHeader.js'

const Header = () => {
  const { setInfo, search, setSearch } = useUtilits();
  const { logout } = useAuth();
  const { searchGroups } = useGroup();

  const result = () => {
    setInfo(true);
    searchGroups(search);
  };

  return (
    <HeaderCard>
      <div className="User">
        <img alt="user" src="https://unsplash.it/50/50"></img>
      </div>
      <DivSearch>
        <input
          label={"Pesquisar"}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder='Pequisar'
        />
        <button onClick={result}>
          <FiSearch size={20} color='black' />
        </button>
      </DivSearch>
    </HeaderCard>

  );
};

export default Header;
