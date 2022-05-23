import Spinner from '../UI/Spinner';
import Card from "../UI/Card";

const UserDetails = ({ user,loading }) => {
  return (
    <Card padding="20px" margin="10px 0">
      {loading ? (
        <Spinner minHeight="290px"/>
      ) : (
        <div className="user__details">
          <div className="user__details-left">
            <div className="user__img">
              <img src={user.avatar_url} alt="" />
            </div>
            <h3 className="user__hireable">
              Hireable :
              {user.hireable ? (
                <span className="check"></span>
              ) : (
                <span className="not__check"></span>
              )}
            </h3>
            <a
              href={user.html_url}
              className="btn btn-dark"
              target="_blank"
              rel="noreferrer"
            >
              Github Page
            </a>
          </div>
          <div className="user__details-right">
            <div className="user__info">
              <h3>
                Name : <span>{user.name}</span>
              </h3>
              <h3>
                UserName : <span>{user.login}</span>
              </h3>
              <h3>
                Bio : <p>{user.bio}</p>
              </h3>
              <h3>
                Company : <span>{user.company}</span>
              </h3>
              <h3>
                CreatedAt : <span>{user.created_at}</span>
              </h3>
              <h3>
                Location : <span>{user.location}</span>
              </h3>
            </div>
            <div className="user__social">
              <span className="user__social-followers">
                Followers : {user.followers}
              </span>
              <span className="user__social-following">
                Following : {user.following}
              </span>
              <span className="user__social-gists">
                Public Gists : {user.public_gists}
              </span>
              <span className="user__social-repos">
                Public Repos : {user.public_repos}
              </span>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default UserDetails;
