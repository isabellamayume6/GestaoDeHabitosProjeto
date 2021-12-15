import { useGroup } from "../../Providers/group";
import { useState, useEffect } from "react";
import { useAuth } from "../../Providers/auth";
import Card from "../Card";

const GroupContainer = () => {
  const { getUserGroups, userGroup, getAllGroups } = useGroup();
  const { token, userId } = useAuth();

  useEffect(() => {
    getAllGroups(userId, token);
    getUserGroups(token);
  }, []);

  return (
    <div className="habits">
      <h2>Grupos</h2>
      <ul>
        {userGroup.map((item) => {
          return (
            <li>
              <Card secondary={false} isGroup={true} info={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GroupContainer;
