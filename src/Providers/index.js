import { AuthProvider } from "./auth";
import { UserProvider } from "./user";
import { HabitsProvider } from "./habits";
import { GroupProvider } from "./group";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <HabitsProvider>
          <GroupProvider>{children}</GroupProvider>
        </HabitsProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default Providers;
