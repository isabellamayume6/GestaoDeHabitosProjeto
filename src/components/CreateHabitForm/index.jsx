import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHabits } from "../../providers/habits";
import { useAuth } from "../../providers/auth";

const CreateHabitForm = () => {
  const schema = yup.object().shape({
    title: yup.string().required("Insira um título!"),
    category: yup.string().required("Insira uma categoria!"),
    difficulty: yup.string().required("Insira uma dificuldade!"),
    frequency: yup.string().required("Insira uma frequência!"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { createHabit } = useHabits();
  const { token, userId } = useAuth();

  const user = userId;

  const onSubmit = ({
    title,
    category,
    difficulty,
    frequency,
    achieved = false,
    how_much_achieved = 0,
  }) => {
    const data = {
      title,
      category,
      difficulty,
      frequency,
      achieved,
      how_much_achieved,
      user,
    };
    createHabit(JSON.parse(token), data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Criar Hábito</h2>
        <div>
          <input placeholder="Titulo:" {...register("title")} />
          <p>{errors.title?.message}</p>
        </div>
        <div>
          <input placeholder="Categoria:" {...register("category")} />
          <p>{errors.category?.message}</p>
        </div>
        <div>
          <input placeholder="Dificuldade:" {...register("difficulty")} />
          <p>{errors.username?.difficulty}</p>
        </div>
        <div>
          <input placeholder="Frequência" {...register("frequency")} />
          <p>{errors.username?.frequency}</p>
        </div>
        <button type="submit">Registrar Hábito</button>
      </form>
    </>
  );
};

export default CreateHabitForm;
