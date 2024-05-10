import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../utility/Auth";

export default function LogOut() {
  // for navigation
  const navigate = useNavigate();

  useEffect(() => {
    // logout funtion
    logout();
    navigate("/admin/login");
  }, [navigate]);
  return null;
}
