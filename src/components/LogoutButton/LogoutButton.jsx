import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(logOut()).unwrap();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      navigate("/");
    }
  };

  return <button onClick={handleLogout}>Вийти</button>;
};

export default LogoutButton;
