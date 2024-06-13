import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useAuth } from "../provider/UseAuth";

export default function PrivateRoute({ children }) {
  //user varification
  const { isAuthorizedUser } = useAuth();
  const user = isAuthorizedUser();

  return user ? children : <Navigate to="/admin/login" />;
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
