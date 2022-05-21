import Header from '../components/UI/Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
      {/* FOOTER */}
    </>
  );
};

export default Layout;
