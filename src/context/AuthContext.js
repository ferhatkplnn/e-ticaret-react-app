import { createContext, useContext, useEffect, useState } from "react";
import { fetchUserData } from "../api";
import LoadingSpinner from "../components/LoadingSpinner";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const userData = await fetchUserData();

        setLoggedIn(true);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching the user:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const login = (data) => {
    setLoggedIn(true);
    setUser(data.user);

    try {
      localStorage.setItem("access-token", data.accessToken);
      localStorage.setItem("refresh-token", data.refreshToken);
    } catch (error) {
      console.error("Error storing tokens:", error);
    }
  };

  const authContextValues = {
    loggedIn,
    user,
    login,
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <AuthContext.Provider value={authContextValues}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
