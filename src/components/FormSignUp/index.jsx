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
        password: yup.string().required('Senha obrigatória!')
    })
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema)
    })
    const history = useHistory()
    const { errors } = formState
    const onSubmit = (data) => {
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
            <input placeholder='confirme senha' type='password' />
            <button type='submit'>Conectar</button>
        </form >
    )
}
export default FormSignUp;
