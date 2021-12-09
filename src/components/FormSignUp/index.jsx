import Api from '../../services/Api'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const FormSignUp = () => {
    const schema = yup.object().shape({
        username: yup.string().required('Campo obrigatório!'),
        email: yup.string().email('e-mail inválido!').required('Campo obrigatório!'),
        password: yup.string().required('Senha obrigatória!').min(6),
        confirm_password: yup.string().oneOf([yup.ref('password'), null], 'senhas diferentes').required('campo obrigatório')
    })
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema)
    })
    const history = useHistory()
    const { errors } = formState

    const onSubmit = ({ username, email, password }) => {
        const data = { username, email, password }
        Api.post("/users/", data)
            .then((reponse) => {
                console.log(reponse)
                toast.success('Cadastro feito com sucesso!')
                history.push('/')
            })
            .catch((err) => {
                console.log(err, 'aqui errado')
                toast.error('Tente novamente mais tarde.')
            })
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Cadastre-se</h1>
            <span>{errors.username?.message}</span>
            <input placeholder='Nome' {...register('username')} />
            <span>{errors.email?.message}</span>
            <input placeholder='e-mail' {...register('email')} />
            <span>{errors.password?.message}</span>
            <input placeholder='senha' type='password' {...register('password')} />
            <span>{errors.confirm_password?.message}</span>
            <input placeholder='confirme senha' type='password' {...register('confirm_password')} />
            <button type='submit'>Conectar</button>
        </form >
    )
}
export default FormSignUp;