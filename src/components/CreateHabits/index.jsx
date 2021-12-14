import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { toast } from "react-hot-toast";

const CreateHabits = ({ createHabits }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    createHabits(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Criar Novo Hábito</h3>
        <input placeholder="Título" {...register("title")} />
        <p>{errors.title?.message}</p>
        <input placeholder="Categoria" {...register("category")} />
        <p>{errors.category?.message}</p>
        <input placeholder="Dificuldade" {...register("difficulty")} />
        <p>{errors.difficulty?.message}</p>
        <input placeholder="Frequência" {...register("frequency")} />
        <p>{errors.frequency?.message}</p>
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};

export default CreateHabits;
