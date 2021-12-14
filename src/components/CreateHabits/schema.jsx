import * as yup from "yup";

export const schema = yup.object().shape({
  title: yup.string().required("Título é obrigatório!"),
  category: yup.string().required("Categoria é obrigatória!"),
  difficulty: yup.string().required("Dificuldade é obrigatória!"),
  frequency: yup.string().required("Frequência é obrigatória!"),
});
