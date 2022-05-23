import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Repos from "../components/user/Repos";
import BackBtn from "../components/backBtn/BackBtn";
import UserDetails from "../components/user/UserDetails";

const User = ({ user, loading, getUser, getRepos, loadingRepos, repos }) => {
  const { login } = useParams();

  useEffect(() => {
    getUser(login);
    getRepos(login);
  }, []);

  return (
    <div className="user">
      <BackBtn />
      <UserDetails user={user} loading={loading} />
      <Repos repos={repos} loadingRepos={loadingRepos} />
    </div>
  );
};

export default User;
