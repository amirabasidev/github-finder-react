import { Link } from "react-router-dom";

import Card from "./Card";

import navbarItems from "../../config/navbarItems";

const Header = () => {
  return (
    <Card padding="15px 15px">
      <header className="header">
        <h1 className="logo">GitHub Finder</h1>
        <nav>
          <ul className="navbar__items">
            {navbarItems.map(({ title, url, key }) => (
              <li key={key} className="navbar__item">
                <Link className="navbar__link" to={url}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </Card>
  );
};

export default Header;
