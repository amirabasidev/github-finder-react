const Repo = ({ repo }) => {
  return (
    <li className="repo">
      <a
        href={repo.html_url}
        className="repo__link"
        target="_blank"
        rel="noreferrer"
      >
        {repo.name}
      </a>
      {repo.description && <p className="repo__desc">{repo.description}</p>}
    </li>
  );
};

export default Repo;
