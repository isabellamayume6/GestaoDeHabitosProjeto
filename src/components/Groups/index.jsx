import { useGroup } from "../../Providers/group";
import { useState, useEffect } from "react";
import { useAuth } from "../../Providers/auth";
import Card from "../Card";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const GroupContainer = () => {
  const {
    getUserGroups,
    userGroup,
    getAllGroups,
    allGroups,
    subscribeGroup,
    createGroup,
  } = useGroup();
  const { token, user } = useAuth();

  useEffect(() => {
    getAllGroups(JSON.parse(token));
    getUserGroups(JSON.parse(token));
  }, []);

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),

    description: yup.string(),
    category: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ name, description, category }) => {
    const creator = user;
    const data = {
      name,
      description,
      category,
    };
    subscribeGroup(887, JSON.parse(token));
    createGroup(data, JSON.parse(token));
  };

  return (
    <div className="habits">
      <h2>Grupos</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="nome" {...register("name")} />
        <input placeholder="desc" {...register("description")} />
        <input placeholder="categ" {...register("category")} />
        <button type="submit">Criar</button>
      </form>
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
