import Api from "../../services/Api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import { MainSi, FormSI } from "./StyledFormSI";
import { useAuth } from "../../Providers/auth";

import Button from "../Button";

import { useHistory } from "react-router-dom";

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
    <MainSi>
      <div className="log">
        <h1>Login</h1>
        <FormSI onSubmit={handleSubmit(onSubmit)}>
          <span>{errors.username?.message}</span>
          <input placeholder="Digite seu username" {...register("username")} />
          <span>{errors.password?.message}</span>
          <input placeholder="Digite sua senha" {...register("password")} />
          <Button type="submit">Logar</Button>
        </FormSI>
        <div className="footer">
          <p>Não possui uma conta?</p>
          <Button secondary onClick={() => history.push("/register")}>
            Cadastrar
          </Button>
        </div>
      </div>
      <img
        src="https://cdn.discordapp.com/attachments/842187276359434273/920022667829059584/imagelogin.webp"
        alt=""
      />
    </MainSi>
  );
};
export default FormSignIn;
