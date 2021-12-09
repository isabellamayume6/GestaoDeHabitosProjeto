import Api from '../../services/Api';
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast, Toaster } from 'react-hot-toast';


import { useHistory } from 'react-router-dom'
const FormSignIn = () => {
 
    const history = useHistory()


    const schema = yup.object().shape({
        username: yup.string()
        .required('Username obrigatório'),

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
            
            history.push('/dashboard')

           
        })
        .catch((err) => {
            toast.error('Senha ou Username invalido')
            console.log(err)
        })
        

    }

    return(
        <div>
           
            <form onSubmit={handleSubmit(onSubmit)}>
                <span>{errors.username?.message}</span>
                <input
                placeholder='Digite seu username'
                {...register('username')}/>
                
                <span>{errors.password?.message}</span>
                <input
                placeholder='Digite sua senha'
                {...register('password')}/>
                

                <button type='submit'>Logar</button>
           
            </form>  
                <p>Criar uma Página para montar seus 
                    <strong> habitos e grupos</strong>
                </p>
                   
                    <button onClick={() => history.push('/register')}>Cadastrar</button>
        </div>

       
    )
  
}
export default FormSignIn