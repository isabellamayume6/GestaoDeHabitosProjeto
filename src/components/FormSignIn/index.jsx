import Api from '../../services/Api';
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import toast from 'react-hot-toast';

const FormSignIn = () => {
 



    const schema = yup.object().shape({
        username: yup.string()
        .required('Email obrigatório'),

        password: yup.string()
        .required('Senha obrigatória')
    })

    const {
        register,
        handleSubmit,
        formState: { errors},
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        Api
        .post('/sessions/',data)
        .then(response => {
            toast.success('Login Realizado')

            // const { token } = response.data;
            // const { user } = response.data.users;

            

            // localStorage.setItem('@GestaoHabitos:token', JSON.stringify(token));
            // localStorage.setItem('@GestaoHabitos:token', JSON.stringify(user));

            console.log(response.data)
        })
        .catch((err) => {
            toast.error(err)
            console.log(err)
        })
        

    }

    return(
        <div>
           
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                placeholder='Digite seu username'
                {...register('username')}/>
                <p>{errors.username?.message}</p>

                <input
                placeholder='Digite sua senha'
                {...register('password')}/>
                <p>{errors.password?.message}</p>

                <button type='submit'>Logar</button>
           
            </form>  
                <p>Criar uma Página para montar seus 
                    <strong> habitos e grupos</strong>
                </p>
                   
                    <button type='submit'>Cadastrar</button>
        </div>
    )
  
}
export default FormSignIn