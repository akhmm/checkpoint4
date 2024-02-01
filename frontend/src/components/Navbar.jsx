import { useLocation, Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

function Navbar() {
  const { userInfos, setUserInfos } = useUser();
  const location = useLocation();

  const handleClick = () => {
    setUserInfos(null);
  };

  return (
    <nav>
      <div className="image-container">
        <Link to="/admin">
          <img src="/images/logo.png" alt="ichizen_logo" />
        </Link>
      </div>
      {location.pathname !== "/" && (
        <div className="text-icon-container">
          {userInfos && <p>Bonjour {userInfos.username}👋</p>}
          <Link to="/" target="_blank">
            <img src="/images/website.png" alt="website_logo" />
          </Link>
          {userInfos && (
            <Link to="/connection" onClick={handleClick}>
              <img src="/images/logout.png" alt="logout_logo" />
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
