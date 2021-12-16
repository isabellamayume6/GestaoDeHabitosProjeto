import FormSignIn from "../../components/FormSignIn";
import { useAuth } from "../../Providers/auth";
import { Redirect } from "react-router-dom";

const SignIn = () => {
  const { isLogged } = useAuth();
  if (isLogged) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <FormSignIn />
    </div>
  );
};
export default SignIn;
