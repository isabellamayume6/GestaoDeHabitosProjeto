import { FiSearch } from "react-icons/fi";
import { MdOutlineExitToApp } from "react-icons/md";
import { useUtilits } from "../../Providers/utilits";
import { useAuth } from "../../Providers/auth";
import { useGroup } from "../../Providers/group";
import { HeaderCard, DivSearch } from "./styledHeader.js";

const Header = () => {
  const { setInfo, search, setSearch } = useUtilits();
  const { logout } = useAuth();
  const { searchGroups } = useGroup();

  const result = () => {
    if (!!search) {
      setInfo(true);
      searchGroups(search);
    }
  };

  return (
    <HeaderCard>
      <div className="User" onClick={logout}>
        <MdOutlineExitToApp size={30} color={"#FF3978"} />
      </div>
      <DivSearch>
        <input
          label={"Pesquisar"}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Pequisar"
        />
        <button onClick={result}>
          <FiSearch size={20} color="black" />
        </button>
      </DivSearch>
    </HeaderCard>
  );
};

export default Header;
