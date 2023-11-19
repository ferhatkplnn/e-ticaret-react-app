import { createContext, useContext, useEffect, useState } from "react";
import { fetchLogout, fetchUserData } from "../api";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const userData = await fetchUserData();

        setLoggedIn(true);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching the user");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const login = (data) => {
    try {
      localStorage.setItem("access-token", data.accessToken);
      localStorage.setItem("refresh-token", data.refreshToken);

      setLoggedIn(true);
      setUser(data.user);
    } catch (error) {
      console.error("Error storing tokens:", error);
    }
  };

  const logout = async () => {
    setLoggedIn(false);
    setUser(null);

    try {
      await fetchLogout();
      localStorage.removeItem("access-token");
      localStorage.removeItem("refresh-token");
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const authContextValues = {
    loggedIn,
    user,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={authContextValues}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
