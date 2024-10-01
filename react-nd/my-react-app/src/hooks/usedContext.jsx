import { createContext } from "react";
import useLocalStorage from "./useLocalStorage";

const usedContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);

  const login = (user) => setUser(user);
  const logout = () => setUser(null);

  const register = (userData) => {
    setUser(userData);
  };
  
  return (
    <usedContext.Provider value={{ user, login, logout, register }}>
      {children}
    </usedContext.Provider>
  );
};

export { UserProvider, usedContext };