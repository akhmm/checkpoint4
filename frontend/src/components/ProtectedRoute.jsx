import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { userInfos } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfos) {
      navigate("/connection");
    }
  }, [userInfos]);

  return children;
};

export default ProtectedRoute;
