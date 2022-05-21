import Form from "../components/users/Form";
import Users from "../components/users/Users";
import Spinner from "../components/UI/Spinner";

const Home = ({ searchUsers, users, loading, clearAllUsers }) => {
  return (
    <>
      <Form searchUsers={searchUsers} />
      {loading ? (
        <Spinner minHeight="150px" />
      ) : (
        <Users users={users} clearAllUsers={clearAllUsers} />
      )}
    </>
  );
};

export default Home;
