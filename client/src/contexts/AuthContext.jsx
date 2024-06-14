import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem('user_data');
    if (storedData) {
      try {
        const { userToken, user } = JSON.parse(storedData);
        setToken(userToken);
        setUserData(user);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Error parsing stored user data:", error);
      }
    }
  }, []);

  const login = (newToken, newData) => {
    const userData = { userToken: newToken, user: newData };
    localStorage.setItem('user_data', JSON.stringify(userData));
    setToken(newToken);
    setUserData(newData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('user_data');
    setToken(null);
    setUserData(null);
    setIsAuthenticated(false);
  };

  return (
    // <AuthContext.Provider value={{ token, isAuthenticated, login, logout, userData }}>
    //   {children}
    // </AuthContext.Provider>
    
      <AuthContext.Provider value={{ token, isAuthenticated, login, logout, userData }}>
        {children}
      </AuthContext.Provider>
    
    
  );
};

export const useAuth = () => useContext(AuthContext);
