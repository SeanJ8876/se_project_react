import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";
import ToggleSwitch from "../App/ToggleSwitch/ToggleSwitch";
import CurrentUserContext from "../../context/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  isLoggedIn,
  onRegisterClick,
  onLoginClick,
}) {
  const currentUser = useContext(CurrentUserContext);
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  // Get first letter of user's name for avatar placeholder
  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : "?";
  };

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="WTWR logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <div className="header__user-container">
        <ToggleSwitch />
        {isLoggedIn ? (
          <>
            <button
              onClick={handleAddClick}
              type="button"
              className="header__add-clothes-btn"
            >
              + Add clothes
            </button>
            <Link to="/profile" className="header__link">
              <div className="header__user-info">
                <p className="header__username">{currentUser?.name}</p>
                {currentUser?.avatar ? (
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="header__avatar"
                  />
                ) : (
                  <div className="header__avatar-placeholder">
                    {getInitial(currentUser?.name)}
                  </div>
                )}
              </div>
            </Link>
          </>
        ) : (
          <>
            <button
              onClick={onRegisterClick}
              type="button"
              className="header__register-btn"
            >
              Sign Up
            </button>
            <button
              onClick={onLoginClick}
              type="button"
              className="header__login-btn"
            >
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
