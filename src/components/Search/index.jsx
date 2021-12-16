import { useGroup } from "../../Providers/group";
import { useUtilits } from "../../Providers/utilits";
import Button from "../Button";
import Card from "../Card";

const SearchResult = () => {
  const { searchedGroups, subscribeGroup } = useGroup();
  const { setInfo } = useUtilits();

  const subscribe = (id) => {
    subscribeGroup(id);
    setInfo(false);
  };

  return (
    <>
      {searchedGroups.map((item) => {
        return (
          <>
            <Card secondary={true} isGroup={true} info={item} key={item.id} />
            <Button onClick={() => subscribe(item.id)}>Inscrever</Button>
          </>
        );
      })}
    </>
  );
};

export default SearchResult;
