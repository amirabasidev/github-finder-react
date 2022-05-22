import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import Spinner from "./components/UI/Spinner";

const Home = lazy(() => import("./pages/Home"));
const User = lazy(() => import("./pages/User"));

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const searchUsers = async (value) => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/search/users?q=${value}`);
      const users = await res.json();

      setUsers(users.items);
    } catch (error) {
      throw `Error : ${error}`;
    } finally {
      setLoading(false);
    }
  };

  const clearAllUsers = () => setUsers([]);

  const getUser = async (login) => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${login}`);
      const user = await res.json();

      setUser(user);
    } catch (error) {
      throw `Error : ${error}`;
    } finally {
      setLoading(false);
    }
  };

  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Spinner minHeight="60vh" />}>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  searchUsers={searchUsers}
                  loading={loading}
                  users={users}
                  clearAllUsers={clearAllUsers}
                />
              }
            />
            <Route
              path="/user/:login"
              element={<User user={user} loading={loading} getUser={getUser} />}
            />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
