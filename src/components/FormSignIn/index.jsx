import Api from "../../services/Api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";

import { useHistory } from "react-router-dom";
import { useAuth } from "../../Providers/auth";

const FormSignIn = () => {
  const history = useHistory();

  const { defineUser } = useAuth();

  const schema = yup.object().shape({
    username: yup.string().required("Username obrigatório"),

    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Minimo seis digitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    Api.post("/sessions/", data)
      .then((response) => {
        toast.success("Logado com sucesso!");
        const token = response.data.access;
        localStorage.setItem("@GestaoHabitos:token", JSON.stringify(token));
        history.push("/dashboard");
        defineUser(token);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Nome do usuário ou senha inválidos!");
      });
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span>{errors.username?.message}</span>
        <input placeholder="Digite seu username" {...register("username")} />
        <span>{errors.password?.message}</span>
        <input placeholder="Digite sua senha" {...register("password")} />
        <button type="submit">Logar</button>
      </form>
      <p>
        Criar uma Página para montar seus
        <strong> habitos e grupos</strong>
      </p>
      <button onClick={() => history.push("/register")}>Cadastrar</button>
    </div>
  );
};
export default FormSignIn;
