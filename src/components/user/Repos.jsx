import Card from "../UI/Card";
import Spinner from "../UI/Spinner";
import Repo from "./Repo";

const Repos = ({ repos, loadingRepos }) => {
  return (
    <Card padding="20px" margin="20px 0">
      {loadingRepos ? (
        <Spinner minHeight="190px" />
      ) : (
        <ul className="repos">
          {repos.map((repo) => (
            <Repo key={repo.id} repo={repo} />
          ))}
        </ul>
      )}
    </Card>
  );
};

export default Repos;
