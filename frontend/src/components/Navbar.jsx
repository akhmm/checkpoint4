import { useLocation, Link } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  return (
    <nav>
      <div className="image-container">
        <Link to="/admin">
          <img src="public/images/logo.png" alt="ichizen_logo" />
        </Link>
      </div>
      {location.pathname !== "/" && (
        <div className="text-icon-container">
          <p>Bonjour admin👋</p>{" "}
          <Link to="/">
            <img src="images/website.png" alt="logout_logo" />
          </Link>
          <Link to="/connection">
            <img src="images/logout.png" alt="logout_logo" />
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
