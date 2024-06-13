import { jwtDecode } from "jwt-decode";
import PropTypes from "prop-types";
import { createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // login handle
  const login = async (user, nav) => {
    try {
      fetch("https://book-store-server-delta.vercel.app/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => {
          // login error handle
          if (!res.ok) {
            throw new Error("Incorrect email or password");
          }
          return res.json();
        })
        .then((res) => {
          // token set to browser local storage
          localStorage.setItem("Token", res);
          // navigate to admin dashboard
          nav();
        })
        .catch((error) => {
          // Display the error message
          alert(error.message);
        });
    } catch {
      alert("Login error");
    }
  };

  // logout handle
  const logout = () => {
    // remove token
    localStorage.removeItem("Token");
    // set null token
    localStorage.setItem("Token", "");
  };

  // user data and validation handle
  const isAuthorizedUser = () => {
    //get token
    const token = localStorage.getItem("Token");

    // validate token
    if (token) {
      // decode
      const user = jwtDecode(token);

      // exp check
      if (user.exp > Date.now() / 1000) {
        return user;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ login, logout, isAuthorizedUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.node,
};
