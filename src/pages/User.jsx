import { useEffect } from "react";
import { useParams } from "react-router-dom";

const User = ({ user, loading, getUser }) => {
  const { login } = useParams();
  
  useEffect(() => {
    getUser(login);
  }, []);

  return (
    <div className="user">
      {/* USER DETAILS */}
    </div>
  );
};

export default User;
