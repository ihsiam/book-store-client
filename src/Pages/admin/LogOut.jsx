import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/UseAuth";

export default function LogOut() {
  // for navigation
  const navigate = useNavigate();
  // log out function distructure
  const { logout } = useAuth();

  useEffect(() => {
    // logout funtion
    logout();
    navigate("/admin/login");
  }, [navigate, logout]);
  return null;
}
