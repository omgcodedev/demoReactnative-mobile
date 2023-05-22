import { createContext, useState } from "react";

export const AuthContext = createContext({
  authenticated: false,
  setAuthenticated: (value: boolean) => {},
});

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        setAuthenticated: (value) => setAuthenticated(value),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
