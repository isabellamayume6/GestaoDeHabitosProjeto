import TextInput from "../TextInput";
import Button from "../Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useAuth } from "../../Providers/auth";
import { useHabits } from "../../Providers/habits";
import { useGroup } from "../../Providers/group";
import { useUtilits } from "../../Providers/utilits";

import jwt_decoded from "jwt-decode";

const Modal = ({ isGroup }) => {
  const { token } = useAuth();
  const { createHabit } = useHabits();
  const { createGroup } = useGroup();

  const { setModal, setModalOnHabits, setModalOnGroups } = useUtilits();

  const userId = jwt_decoded(token).user_id;

  console.log(userId);

  const habitSchema = yup.object().shape({
    title: yup.string().required("Título obrigatório."),
    category: yup.string().required("Categoria obrigatória."),
    difficulty: yup.string().required("Dificuldade obrigatória."),
    frequency: yup.string().required("Frequência obrigatória."),
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
    resolver: yupResolver(!isGroup ? habitSchema : groupSchema),
  });

  const onSubmitHabit = (data) => {
    data.achieved = false;
    data.how_much_achieved = 0;
    data.user = userId;
    console.log(data);
    createHabit(token, data);
    setModalOnHabits(false);
  };

  const onSubmitGroup = (data) => {
    console.log("criar grupo");
    createGroup(data, token);
    setModal(false);
    setModalOnGroups(false);
  };

  const closeModal = () => {
    setModalOnHabits(false);
    setModalOnGroups(false);
  };

  return (
    <div>
      <Button onClick={closeModal}>X</Button>
      {!isGroup ? (
        <form onSubmit={handleSubmit(onSubmitHabit)}>
          <TextInput
            label="Título"
            field={"title"}
            register={register}
            error={errors.title?.message}
          />
          <TextInput
            label="Categoria"
            field={"category"}
            register={register}
            error={errors.category?.message}
          />
          <TextInput
            label="Dificuldade"
            field={"difficulty"}
            register={register}
            error={errors.difficulty?.message}
          />
          <TextInput
            label="Frequência"
            field={"frequency"}
            register={register}
            error={errors.frequency?.message}
          />
          <Button type="submit">Criar</Button>
        </form>
      ) : (
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
      )}
    </div>
  );
};

export default Modal;
