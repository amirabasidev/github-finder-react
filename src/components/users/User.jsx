import { Link } from "react-router-dom";


const User = ({ user }) => {
  return (
    <div className="user__item">
      <div className="user__item-img">
        <img src={user.avatar_url} alt={user.login} />
      </div>
      <h3 className="user__item-name">{user.login}</h3>
        <Link to={`user/${user.login}`} className="btn btn-dark">View User</Link>
    </div>
  );
};

export default User;
