import Api from "../../services/Api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import { MainSi } from './StyledFormSI'

import Button from "../Button";

import { useHistory } from "react-router-dom";

const FormSignIn = () => {
  const history = useHistory();

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
        toast.success("Login Realizado");

        // const { token } = response.data;
        // const { user } = response.data.users;

        // localStorage.setItem('@GestaoHabitos:token', JSON.stringify(token));
        // localStorage.setItem('@GestaoHabitos:token', JSON.stringify(user));

        console.log(response.data);

        history.push("/dashboard");
      })
      .catch((err) => {
        toast.error("Senha ou Username invalido");
        console.log(err);
      });
  };

  return (
    <MainSi>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span>{errors.username?.message}</span>
        <input placeholder="Digite seu username" {...register("username")} />
        <span>{errors.password?.message}</span>
        <input placeholder="Digite sua senha" {...register("password")} />
        <Button type="submit">Logar</Button>
      </form>
      {/* <p>
        Criar uma Página para montar seus
        <strong> habitos e grupos</strong>
      </p> */}
      <div className='footer'>
        <p>Não possui uma conta?</p>
        <Button secondary onClick={() => history.push("/register")}>
          Cadastrar
        </Button>
      </div>
    </MainSi >
  );
};
export default FormSignIn;
