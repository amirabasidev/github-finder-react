import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import Spinner from "./components/UI/Spinner";

const Home = lazy(() => import("./pages/Home"));

const App = () => {
  const [users, setUsers] = useState([]);
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
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
