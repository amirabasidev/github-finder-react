import Form from "../components/users/Form";

const Home = ({ searchUsers }) => {
  return (
    <>
      <Form searchUsers={searchUsers} />
    </>
  );
};

export default Home;
