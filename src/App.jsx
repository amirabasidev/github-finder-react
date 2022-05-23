import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import Spinner from "./components/UI/Spinner";

const Home = lazy(() => import("./pages/Home"));
const User = lazy(() => import("./pages/User"));

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingRepos, setLoadingRepos] = useState(false);

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

  const getRepos = async (login) => {
    setLoadingRepos(true);
    try {
      const res = await fetch(
        `https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc`,
      );
      const repos = await res.json();

      setRepos(repos);
    } catch (error) {
      throw `Error : ${error}`;
    } finally {
      setLoadingRepos(false);
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
              element={
                <User
                  user={user}
                  loading={loading}
                  getUser={getUser}
                  getRepos={getRepos}
                  repos={repos}
                  loadingRepos={loadingRepos}
                />
              }
            />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
