import { AuthProvider } from "./auth";
import { HabitsListProvider } from "./habitsList";

const Providers = ({ children }) => {
  return (
    <HabitsListProvider>
      <AuthProvider>{children}</AuthProvider>
    </HabitsListProvider>
  );
};

export default Providers;
