import { useGroup } from "../../Providers/group";
import { useState, useEffect } from "react";
import { useAuth } from "../../Providers/auth";
import Card from "../Card";
import { CardGroups } from './styles.js'

const GroupContainer = () => {
  const { getUserGroups, userGroup, getAllGroups } = useGroup();
  const { token, userId } = useAuth();

  useEffect(() => {
    getAllGroups(userId, token);
    getUserGroups(token);
  }, []);

  return (
    <CardGroups>

      {userGroup.map((item) => {
        return (
          <Card secondary={true} isGroup={true} info={item} key={item.id} />
        )
      })}
    </CardGroups>
  )
};

export default GroupContainer;
