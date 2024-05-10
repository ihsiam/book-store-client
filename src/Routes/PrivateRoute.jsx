import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useAuth } from "../utility/Auth";

export default function PrivateRoute({ children }) {
  //user varification
  const user = useAuth();

  return user ? children : <Navigate to="/admin/login" />;
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
