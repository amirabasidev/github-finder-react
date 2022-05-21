import User from "./User";

const Users = ({ users,clearAllUsers }) => {
  return (
    <>
      {users.length > 0 && (
        <button
          className="btn btn-danger users__clear-all"
          onClick={clearAllUsers}
        >
          Clear All
        </button>
      )}
      <div className="users">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default Users;
