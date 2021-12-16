import FormSignUp from "../../components/FormSignUp";
import { useAuth } from "../../Providers/auth";
import { Redirect } from "react-router-dom";
const SignUp = () => {
  const { isLogged } = useAuth();

  if (isLogged) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <FormSignUp />
    </div>
  );
};
export default SignUp;
