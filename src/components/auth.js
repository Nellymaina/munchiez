import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export default function AuthProvider({ children }){
  const [sidebar, setsidebar]=useState(false);
    
  
  function toggle(){
     setsidebar(prevState=>!prevState)
  }
  
  const [auth, setAuth] = useState(null);
  


  const login = async (username, password) => {
    try {
      const response = await axios.post("https://munchiez-1.onrender.com/login", { username, password });
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


  
    
  

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setAuth(storedToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ sidebar, toggle, auth, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
