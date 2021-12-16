import TextInput from "../TextInput";
import Button from "../Button";
import { ModalForm, BoxModal } from "./styleModal.js";
import { MdOutlineClose } from "react-icons/md";

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
    createHabit(token, data);
    setModalOnHabits(false);
  };

  const onSubmitGroup = (data) => {
    createGroup(data, token);
    setModal(false);
    setModalOnGroups(false);
  };

  const closeModal = () => {
    setModalOnHabits(false);
    setModalOnGroups(false);
  };

  return (
    <BoxModal isGroup={isGroup}>
      <button onClick={closeModal} className="close">
        <MdOutlineClose size={25} color="black" />
      </button>
      {!isGroup ? (
        <ModalForm onSubmit={handleSubmit(onSubmitHabit)}>
          <TextInput
            secondary
            label="Título"
            field={"title"}
            register={register}
            error={errors.title?.message}
          />
          <TextInput
            secondary
            label="Categoria"
            field={"category"}
            register={register}
            error={errors.category?.message}
          />
          <TextInput
            secondary
            label="Dificuldade"
            field={"difficulty"}
            register={register}
            error={errors.difficulty?.message}
          />
          <TextInput
            secondary
            label="Frequência"
            field={"frequency"}
            register={register}
            error={errors.frequency?.message}
          />
          <Button secondary type="submit">
            Criar
          </Button>
        </ModalForm>
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
    </BoxModal>
  );
};

export default Modal;
