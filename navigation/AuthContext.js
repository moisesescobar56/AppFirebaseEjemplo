import React, { createContext, useContext, useState } from 'react';

// crear el contexto
const AuthContext = createContext();

// hook personalizado para acceder al contexto
export function useAuth() {
  return useContext(AuthContext);
}

// proveedor del contexto (envolverá toda la app)
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // null = no logueado

  // Simula login
  const login = (email, password) => {
    // Aquí podrías validar credenciales contra una API real
    setUser({ email }); // guardamos un objeto usuario simulado
  };

  // Simula logout
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
