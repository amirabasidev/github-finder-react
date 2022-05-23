import { useEffect } from "react";
import { useParams } from "react-router-dom";

import BackBtn from "../components/backBtn/BackBtn";
import UserDetails from "../components/user/UserDetails";

const User = ({ user, loading, getUser }) => {
  const { login } = useParams();

  useEffect(() => {
    getUser(login);
  }, []);

  return (
    <div className="user">
      <BackBtn />
      <UserDetails user={user} loading={loading} />
    </div>
  );
};

export default User;
