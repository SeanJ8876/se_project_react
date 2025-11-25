import { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import "./SideBar.css";

function SideBar({ onLogout, onEditProfileClick }) {
  const currentUser = useContext(CurrentUserContext);

  // Get first letter of user's name for avatar placeholder
  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : "?";
  };

  return (
    <div className="sidebar">
      <div className="sidebar__user-info">
        {currentUser?.avatar ? (
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="sidebar__avatar"
          />
        ) : (
          <div className="sidebar__avatar-placeholder">
            {getInitial(currentUser?.name)}
          </div>
        )}
        <p className="sidebar__username">{currentUser?.name}</p>
      </div>
      <button
        onClick={onEditProfileClick}
        type="button"
        className="sidebar__edit-btn"
      >
        Change profile data
      </button>
      <button onClick={onLogout} type="button" className="sidebar__logout-btn">
        Log out
      </button>
    </div>
  );
}

export default SideBar;
