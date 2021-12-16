import TextInput from "../TextInput";
import Button from "../Button";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import jwt_decoded from "jwt-decode";

import { useAuth } from "../../Providers/auth";
import { useHabits } from "../../Providers/habits";
import { useGroup } from "../../Providers/group";
import { useUtilits } from "../../Providers/utilits";

const Edit = ({ isHabit }) => {
  const { token } = useAuth();
  const { updateHabit, deleteHabit } = useHabits();
  const { updateGroup, unsubscribeGroup } = useGroup();
  const { setModalEdit, id } = useUtilits();

  console.log("teste id", id);

  const userId = jwt_decoded(token).user_id;

  const habitSchema = yup.object().shape({
    achieved: yup.string().required("Não sei"),
    how_much_achieved: yup.string().required("Também não sei."),
  });

  const groupSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório."),
    description: yup.string().required("Descrição obrigatória."),
    category: yup.string().required("Categoria obrigatória."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(isHabit ? habitSchema : groupSchema),
  });

  const onSubmitHabit = (data) => {
    console.log(id);
    console.log(token);
    data.achieved = true;
    data.how_much_achieved = 100;
    console.log("mudei", data);
    updateHabit(token, data, id);
    setModalEdit(false);
  };

  const onSubmitGroup = (data) => {
    console.log("Grupo modificado");
    updateGroup(token, data, id);
    setModalEdit(false);
  };

  const unsubscribe = (token, id) => {
    isHabit ? deleteHabit(token, id) : unsubscribeGroup(token, id);
    setModalEdit(false);
  };

  const closeModal = () => {
    setModalEdit(false);
  };

  const removeHabit = () => {
    setModalEdit(false);
    deleteHabit(token, id);
  };

  const removeGroup = () => {
    setModalEdit(false);
    unsubscribe(token, id);
  };

  return (
    <div>
      {isHabit ? (
        <div>
          <button onClick={closeModal}>X</button>
          <form onSubmit={handleSubmit(onSubmitHabit)}>
            <TextInput
              label="Título"
              field={"achieved"}
              register={register}
              error={errors.achieved?.message}
            />
            <TextInput
              label="Categoria"
              field={"how_much_achieved"}
              register={register}
              error={errors.how_much_achieved?.message}
            />
            <div>
              <Button type="submit">Editar</Button>
            </div>
          </form>
          <Button onClick={removeHabit}>Deletar</Button>
        </div>
      ) : (
        <div>
          <button onClick={closeModal}>X</button>
          <form onSubmit={handleSubmit(onSubmitGroup)}>
            <TextInput
              label="Nome do Grupo"
              field={"name"}
              register={register}
              error={errors.name?.message}
            />
            <TextInput
              label="Descrição"
              field={"description"}
              register={register}
              error={errors.description?.message}
            />
            <TextInput
              label="Categoria"
              field={"category"}
              register={register}
              error={errors.category?.message}
            />
            <Button type="submit">Criar</Button>
          </form>
          <Button onClick={removeGroup}>Sair</Button>
        </div>
      )}
    </div>
  );
};

export default Edit;
