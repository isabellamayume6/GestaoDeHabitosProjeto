import { AuthProvider } from "./auth";
import { UserProvider } from "./user";
import { HabitsProvider } from "./habits";
import { GroupProvider } from "./group";
import { useUtilits, UtilitsProvider } from "./utilits";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <HabitsProvider>
          <UtilitsProvider>
            <GroupProvider>{children}</GroupProvider>
          </UtilitsProvider>
        </HabitsProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default Providers;
