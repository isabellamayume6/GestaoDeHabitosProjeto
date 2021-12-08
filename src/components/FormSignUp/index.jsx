import Api from '../../services/Api'
//import * as yup from 'yup';
import { useForm } from "react-hook-form";
//import { yupResolver } from '@hookform/resolvers/yup';
//import { useHistory, Redirect } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const FormSignUp = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        Api.post("/users/", data)
            .then((reponse) => {
                console.log(reponse)
                toast.success('ok bro')
            })
            .catch((err) => {
                console.log(err, 'aqui errado')
                toast.error('X')
            })
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Cadastre-se</h1>
            <input placeholder='Nome' {...register('username')} />
            <input placeholder='e-mail' {...register('email')} />
            <input placeholder='senha' type='password' {...register('password')} />
            <input placeholder='confirme senha' type='password' />
            <button type='submit'>Conectar</button>
        </form >
    )
}
export default FormSignUp;
