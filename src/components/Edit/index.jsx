import TextInput from "../TextInput";
import Button from "../Button";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import jwt_decoded from "jwt-decode";

import { useAuth } from "../../Providers/auth";
import { useHabits } from "../../Providers/habits";
import { useGroup } from "../../Providers/group";

const Edit = ({ isHabit, id }) => {
  const { token } = useAuth();
  const { updateHabit, deleteHabit } = useHabits();
  const { updateGroup, unsubscribeGroup } = useGroup();

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
    resolver: yupResolver(!isHabit ? habitSchema : groupSchema),
  });

  const onSubmitHabit = (data) => {
    data.achieved = false;
    data.how_much_achieved = 0;
    data.user = userId;
    console.log(data);
    updateHabit(token, data, id);
  };

  const onSubmitGroup = (data) => {
    console.log("Grupo modificado");
    updateGroup(token, data, id);
  };

  const unsubscribe = (token, id) => {
    isHabit ? deleteHabit(token, id) : unsubscribeGroup(token, id);
  };

  return (
    <div>
      {isHabit ? (
        <div>
          <button>X</button>
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
            <div>
              <Button type="submit">Criar</Button>
              <Button onClick={() => deleteHabit(token, id)}>Deletar</Button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <button>X</button>
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
            <div>
              <Button type="submit">Criar</Button>
              <Button onClick={() => unsubscribe(token, id)}>Sair</Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Edit;
