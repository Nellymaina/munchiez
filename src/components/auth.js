import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export default function AuthProvider({ children }){
  const [auth, setAuth] = useState(null);
  const [theme, setTheme] = useState("light"); 


  const login = async (username, password) => {
    try {
      const response = await axios.post("http://localhost:5000/login", { username, password });
      const token = response.data.token; 
      setAuth(token);
      localStorage.setItem("token", token);
    } catch (error) {
      throw new Error("Login failed");
    }
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem("token");
  };


  
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
  
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);
  

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setAuth(storedToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, login, logout, toggleTheme, theme}}>
      {children}
    </AuthContext.Provider>
  );
};
