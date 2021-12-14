import Api from "../../services/Api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { toast } from "react-hot-toast";
import Button from "../Button";
import { ContainerForm, MainDesktop } from "./StyledForm.js";
import TextInput from "../TextInput";

const FormSignUp = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório!"),
    email: yup
      .string()
      .email("e-mail inválido!")
      .required("Campo obrigatório!"),
    password: yup
      .string()
      .required("Senha obrigatória!")
      .min(6, "Minimo de 6 caracteres"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "senhas diferentes")
      .required("campo obrigatório"),
  });
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const history = useHistory();
  const { errors } = formState;

  const onSubmit = ({ username, email, password }) => {
    const data = { username, email, password };
    Api.post("/users/", data)
      .then((reponse) => {
        console.log(reponse);
        toast.success("Cadastro feito com sucesso!");
        history.push("/");
      })
      .catch((err) => {
        console.log(err, "aqui errado");
        toast.error("Tente novamente mais tarde.");
      });
    console.log(data);
  };
  return (
    <MainDesktop>
      <ContainerForm onSubmit={handleSubmit(onSubmit)}>
        <h1>Cadastre-se</h1>
        <TextInput
          secondary
          field={"username"}
          error={errors.username?.message}
          label="Digite o seu username"
          register={register}
        />
        <TextInput
          secondary
          field={"e-mail"}
          error={errors.email?.message}
          label="Digite o seu e-mail"
          register={register}
        />
        {/* <span>{errors.password?.message}</span>
        <input placeholder="senha" type="password" {...register("password")} /> */}
        <TextInput
          secondary
          field={"password"}
          error={errors.password?.message}
          label="Digite o sua senha"
          register={register}
        />
        {/* <span>{errors.confirm_password?.message}</span>
        <input
          placeholder="confirme senha"
          type="password"
          {...register("confirm_password")}
        /> */}
        <TextInput
          secondary
          field={"confirm_password"}
          error={errors.confirm_password?.message}
          label="Confirme sua senha"
          register={register}
        />
        <Button type="submit" secondary>
          Cadastrar
        </Button>
        <p>Já possui uma conta?</p>
        <Button onClick={() => history.push("/")}>Entrar</Button>
      </ContainerForm>
      <img
        src="https://cdn.discordapp.com/attachments/842187276359434273/920022668093317150/imagesignin.png"
        alt="seila"
      />
    </MainDesktop>
  );
};
export default FormSignUp;
